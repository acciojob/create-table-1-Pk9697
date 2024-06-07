const table=document.getElementById('sampleTable')
function insert_Row() {
    //Write your code here
	const newRow=table.insertRow(0)

	const newCell1=newRow.insertCell(0)
	const newCell2=newRow.insertCell(1)

	newCell1.innerHTML="New Cell1"
	newCell2.innerHTML="New Cell2"
	  
}
// function insert_Row() {
//     //Write your code here
// 		const newTableRow=`
// 			<tr>
// 				<td>New Cell1</td> 
// 				<td>New Cell2</td>
// 			</tr> 
// 		`
// 	  table.innerHTML=newTableRow+table.innerHTML
// }
