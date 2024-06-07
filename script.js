const table=document.getElementById('sampleTable')
function insert_Row() {
    //Write your code here
		const newTableRow=`
			<tr>
				<td>New Cell1</td> 
				<td>New Cell2</td>
			</tr> 
		`
	  table.innerHTML=newTableRow+table.innerHTML
}
