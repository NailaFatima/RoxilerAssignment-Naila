import React from "react";
import { useTable, useGlobalFilter, useSortBy} from "react-table";
import Modal from 'react-modal';
import './table.css'
import {ImCircleDown,ImCircleUp} from "react-icons/im";
import {FaBeer} from "react-icons/fa";
import {GlobalFilter} from './GlobalFilter';

export default function Table( {columns, data}) {
	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		rows,
		prepareRow,
		state,
		setGlobalFilter
	} = useTable ({
		columns,
		data
	}, useGlobalFilter, useSortBy);
	const generateSortingIndicator =(column) => {
		return column.isSorted ? (column.isSortedDesc ? <ImCircleDown /> : <ImCircleUp/>) : '';
	};
    const { globalFilter } = state

	return (
		<>
			<GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />

		<table {...getTableProps()}>
			<thead>
				{headerGroups.map(headerGroup => (
					<tr {...headerGroup.getHeaderGroupProps()}>
						{headerGroup.headers.map(column => (
							<th {...column.getHeaderProps(column.getSortByToggleProps())}>
								{column.render("Header")}
								{generateSortingIndicator(column)}
							</th>
							))}
					</tr>
					))}
			</thead>
			<tbody {...getTableBodyProps()}>
				{rows.map((row, i) => {
					prepareRow(row);
					return (
						<tr {...row.getRowProps()}>
							{row.cells.map(cell => {
								return <td {...cell.getCellProps()}>
									{cell.render("Cell")}
								</td>;
						})}
						</tr>
						);
					})}
			</tbody>
		</table>
		</>
		);
}