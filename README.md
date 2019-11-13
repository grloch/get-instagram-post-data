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
        <code>
           getInstagramPostData(B4wiFxsg7PK)
        </code>
    </p>
    <p>
        You going to need <a href="https://unpkg.com/axios/dist/axios.min.js">axios</a> to this function work.
    </p>
    <p>
        The main funcion will get the JSON and build a JSON as return:
    </p>

</div>

<div>
    <h2>user:</h2>
    <p>Return info of the poster:</p>
    <h3>user.is_verified:</h3>
    <p>boolean value <b>{true or false}</b></p>
    <code>
            post.user.is_verified: <b>false</b>
        </code>
    <br>
    <code>
    post.user.is_verified: <b>true</b>
</code>


    <h3>user.id:</h3>
    <p>string with user id number</p>
    <ul>
        <li>post.user.id: <b>123456789</b></li>
    </ul>

    <h3>user.profilePic:</h3>
    <p>string with user profile picture url</p>
    <ul>
        <li>post.user.profilePic:
            <b>https://instagram.fcgh8-1.fna.fbcdn.net/....jpg?_nc_ht=instagram.fcgh8-1.fna.fbcdn.net</b></li>
    </ul>

    <h3>user.name:</h3>
    <p>string with user name</p>
    <ul>
        <li>post.user.name: <b>9Gag</b></li>
    </ul>

    <h3>user.full_name:</h3>
    <p>string with user name</p>
    <ul>
        <li>post.user.full_name: <b>9GAG: Go Fun The World</b></li>
    </ul>
    <hr>
</div>
<div>
    <h2>location: </h2>
    <p>If post has location, it will return id and location name, else it return <b>null</b>:</p>

    <h3>If doesn't has location</h3>
    <h4>post.location:</h4>
    <ul>
        <li>post.location: <b>null</b></li>
    </ul>

    <h3>If post has location:</h3>
    <h4>post.location.id</h4>
    <p>String with location id number</p>
    <ul>
        <li>post.location.id: <b>123456789</b></li>
    </ul>

    <h4>post.location.name</h4>
    <p>String with location name</p>
    <ul>
        <li>post.location.id: <b>Some beautifull place</b></li>
    </ul>
    <hr>
</div>

<div>
    <h2>type:</h2>
    <h3>post.type</h3>
    <p>string with post type (video, picture or album):</p>
    <ul>
        <li>post.type: <b>"video"</b></li>
        <li>post.type: <b>"picture"</b></li>
        <li>post.type: <b>"album"</b></li>
    </ul>
    <hr>
</div>

<div>
    <h2>likes:</h2>
    <h3>post.likes</h3>
    <p>string with the number of likes of the post</p>
    <ul>
        <li>
            post.likes: <b>1234567890</b>
        </li>
    </ul>
    <hr>
</div>

<div>
    <h2>media</h2>
    <p>Has 3 types of return: video, picture or gallery:</p>

    <h3>If video:</h3>
    <p>post.media:{thumbnail, video}</p>

    <h3>If picture</h3>
    <p>post.media:{picture}</p>

    <h3>If gallery</h3>
    <p>post.media:{gallery info} (in development)</p>
</div>

<div>
    <h2>text</h2>
    <p>String with postext, it will replace line breaks (\n) for break tag (&lt;br&gt;)</p>
    <ul>
        <li>
            post.text: "This is a nice JS script, &lt;br&gt;you NEED to download it!!!"
        </li>
    </ul>
</div>

<div>
    <h2>comments</h2>

    <h3>post.comments.count</h3>
    <p>Return a number of comments on the post:</p>
    <code>post.comments.count: 123456789</code>
    <h3></h3>
    <p>post.comments.comments[n] ... (on development will return post comments)</p>
</div>