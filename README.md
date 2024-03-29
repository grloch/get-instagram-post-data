<div>
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
        For the post on https://www.instagram.com/p/B4wiFxsg7PK/, you need to use:
        <code>getInstagramPostData(<b>B4wiFxsg7PK</b>)</code>
    </p>
    <p>
        Before call the function, create the funcion <pre>function instagramPostDataBuilder(data){}</pre>
    </p>
    <p>
        You going to need <a href="https://unpkg.com/axios/dist/axios.min.js">axios</a> to this function work.
    </p>
    <p>
        The main funcion will get the JSON and build a JSON as return:
    </p>
</div>

<h2>url</h2>
<p>Return post url</p>
<pre>post.url: <b>"https://www.instagram.com/p/12345"</b></pre>

<h2>user:</h2>
<p>Return info of the poster:</p>

<h3>user.is_verified:</h3>
<p>boolean value <b>{true or false}</b></p>
<pre>post.user.is_verified: <b>false</b>
        post.user.is_verified: <b>true</b></pre>

<h3>user.id:</h3>
<p>string with user id number</p>
<pre>post.user.id: <b>123456789</b></pre>

<h3>user.profilePic:</h3>
<p>string with user profile picture url</p>
<pre>post.user.profilePic: <b>https://instagram.fcgh8-1.fna.fbcdn.net/....jpg?_nc_ht=instagram.fcgh8-1.fna.fbcdn.net</b></pre>


<h3>user.name:</h3>
<p>string with user name</p>
<pre>post.user.name: <b>"9Gag"</b></pre>

<h3>user.full_name:</h3>
<p>string with user name</p>
<pre>post.user.full_name: <b>"9GAG: Go Fun The World"</b></pre>


<h2>location: </h2>
<p>If post has location, it will return id and location name, else it return <b>null</b>:</p>

<h3>If doesn't has location</h3>
<h4>post.location:</h4>
<pre>post.location: <b>null</b></pre>

<h3>If post has location:</h3>
<h4>post.location.id</h4>
<p>Int with location id number</p>
<pre>post.location.id: <b>123456789</b></pre>

<h4>post.location.name</h4>
<p>String with location name</p>
<pre>post.location.id: <b>"Some beautifull place"</b></pre>

<h2>type:</h2>
<h3>post.type</h3>
<p>string with post type (video, picture or album):</p>
<pre>
    post.type: <b>"video"</b>
    post.type: <b>"picture"</b>
    post.type: <b>"album"</b></pre>

<h2>likes:</h2>
<h3>post.likes</h3>
<p>string with the number of likes of the post</p>
<pre>post.likes: <b>1234567890</b></pre>

<h2>media</h2>
<p>Has 3 types of return: video, picture or gallery:</p>

<h3>If video:</h3>
<pre>post.media:{thumbnail, video}</pre>

<h3>If picture</h3>
<pre>post.media:{picture}</pre>

<h3>If gallery</h3>
<pre>post.media:{gallery info} (in development)</pre>

<h2>text</h2>
<p>String with postext, it will replace line breaks (\n) for break tag (&lt;br&gt;)</p>
<pre>post.text: <b>"This is a nice JS script, &lt;br&gt;you NEED to download it!!!"</b></pre>

<h2>comments</h2>

<h3>post.comments.count</h3>
<p>Return a number of comments on the post:</p>
<pre>post.comments.count: <b>123456789</b></pre>
<h3>comments[n]</h3>
<p>post.comments.comments[n] ... (on development will return post comments)</p>