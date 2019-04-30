<html>

<body>
	<script>
    function copy()
    {
      var myObject, f;
      myObject = new ActiveXObject("Scripting.FileSystemObject");
      f = myObject.file.copy("G:\test.txt", "G:\mytest.txt");
    } -->
    </script>
    Copy test.txt to mytest.txt
    <form name="myForm">
    <input type="Button" value="Copy File" onClick='copy()'>
    </form>
	
	<script>
	const fs = require('fs') 
  
	// Data which will write in a file. 
	let data = "edit file."
	var username = "admin";
	var date = "20th April 2019";
	var comment = "added data to file";
	  
	// Write data in 'Output.txt' . 
	fs.writeFile('mytest.txt', data, (err) => { 
		window.location.href='editlink.html';
		//document.write('<a href="editlink.html"></a>');
		// In case of a error throw err. 
		if (err) throw err; 
	})
	</script>
</body>
</html>