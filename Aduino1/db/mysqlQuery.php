 <?php
    include_once('conn.php');
    $typeParam = "dateTime";
    $dateTime = array();
    $arduinoData = array();
    $data = array();
    $json = array();
	function getData($startDateTime, $endDateTime) {

		$servername = Environment::getDBHost();
		$username = Environment::getDBUsername();
		$password = Environment::getDBPassword();

		// Create connection
		$conn = new mysqli($servername, $username, $password);

		// Check connection
		if ($conn->connect_error) {
		    die("Connection failed: " . $conn->connect_error);
		} 

		//echo("Sucess!".$startDateTime." ".$startDateTime);

		$sql = "SELECT * FROM suppakng_arduino.arduinoData WHERE dateTime BETWEEN"."'".$_POST['arguments'][0]."' AND '".$_POST['arguments'][1]."'";

		$result = $conn->query($sql);
		$i= 0 ;
		$data = $data."{";
		if ($result->num_rows > 0) {

		    while($row = $result->fetch_assoc()) {
		    	 $json[] = $row;

			}

			  echo json_encode($json);

		} else {
		    echo " 0 results ";
		}
		$conn->close();

        return $result;
    }
   function getCurrentData() {
    
        // return $result;
    }

        if(isset($_POST['action']) && !empty($_POST['action'])) {
		    $action = $_POST['action'];
		    switch($action) {
		        case 'getData' : getData($_POST['arguments'][0],$_POST['arguments'][1]);
		        break;
		        case 'getCurrentData' : getCurrentData();
		        break;
		        // ...etc...
		    }
	}


?>