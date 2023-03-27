<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Add a new user</h1>
    <form action="create.php" method="POST">
    <input type="text" name="first_name" placeholder="First Name">
    <input type="text" name="last_name" placeholder="Last Name">
    <input type="text" name="email" placeholder="Email">
    <input type="text" name="ip_address" placeholder="Ip Address">
    <button type="submit">Send</button>
    </form>
    <form action="delete.php" method="DELETE">
    <input type="number" name="id" placeholder="Delete this user of the id">
    <button type="submit">Delete</button>
    </form>
</body>
</html>