function search()
{
	//declare variables

	var input, filter, table, tr, td, i, textValue;

	input = document.getElementById("myInput");

	/* to search case-sensitive */


	filter = input.value.toUpperCase();

	table = document.getElementById("myTable");

	tr = table.getElementsByTagName("tr");

	//loop through all table rows, and hide those don't match the search query

	for (i = 0; i < tr.length; i++)
	{
		td = tr[i].getElementsByTagName("td")[1];

		if (td)
		{
			textValue = td.textContent || td.innerText;

			if (textValue.toUpperCase().indexOf(filter) > -1)
			{
				tr[i].style.display = "";
			}

			else
			{
				tr[i].style.display = "none";
			}
		}
	}
}