<h1>
    Instagram JSON getter
</h1>
<p>
    A simple function that get a JSON from a Instagram post.
</p>
<p>
    You need to inform the hash of the post, example:
</p>
<p>
    For the post on https://www.instagram.com/p/B4wiFxsg7PK/, you need to use: <b>getInstagramPostData(B4wiFxsg7PK)</b>
</p>
<p>
    You going to need <a href="https://unpkg.com/axios/dist/axios.min.js">axios</a> to this function work.
</p>
<p>
    The main funcion will get the JSON and build a JSON as return:
</p>
<h2>user:</h2>
<p>Return info of the poster:</p>
<h3>user.is_verified:</h3>
<p>boolean value <b>{true or false}</b></p>
<ul>
    <li>post.user.is_verified: <b>false</b></li>
    <li>post.user.is_verified: <b>true</b></li>
</ul>

<h3>user.id:</h3>
<p>string with user id number</p>
<ul><li>post.user.id: <b>123456789</b></li></ul>


<h3>user.profilePic:</h3>
<p>string with user profile picture url</p>
<ul><li>post.user.profilePic:
        <b>https://instagram.fcgh8-1.fna.fbcdn.net/....jpg?_nc_ht=instagram.fcgh8-1.fna.fbcdn.net</b></li></ul>

<h3>user.name:</h3>
<p>string with user name</p>
<ul><li>post.user.name: <b>9Gag</b></li></ul>

<h3>user.full_name:</h3>
<p>string with user name</p>
<ul><li>post.user.full_name: <b>9GAG: Go Fun The World</b></li></ul>
<hr>
