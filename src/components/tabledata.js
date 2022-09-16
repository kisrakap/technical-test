import React, { useEffect, useRef } from "react"
import $ from 'jquery'
 
export default function Tabledata(props) {
 
$.DataTable = require('datatables.net')
const tableRef = useRef()

useEffect(() => {
    
    const table = $(tableRef.current).DataTable(
        {
            columns: [
                { title: "Fee Type Code"},
                { title: "Fee Type Name"},
                { title: "Description"},
                { title: "Status"},
                { title: "Action"}
            ],
            data: props.data,
                destroy: true,  // I think some clean up is happening here
                searching: false,
                checkbox: true
            
        }
    )
    // Extra step to do extra clean-up.
    return function() {
        console.log("Table destroyed")
        table.destroy()
    }
})
    return (
        <div >
            <table className="fluid p-0 m-2 table table-bordered rounded-pill" ref={tableRef}>
                
            </table>
        </div>
         
    )
}