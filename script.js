function getInstagramPostData(urlHash) {
    function verifyPostType(info) {
        if (info) return "video"; else return "picture";
    }
    function verifyPostLocation(info) {
        if (info) {
            return {
                id: info.id,
                name: info.name
            }
        }
        else return null;
    }
    function postTextCorrector(text) {
        return (text).replace(/\n/g, "<br>")
    }
    function postComments(commentsArray) {
        commentsArray.reverse();
        const output = {};
        for (i = 0; i < commentsArray.length; i++) {
            output[i] = {
                user: {
                    is_verified: commentsArray[i].node.owner.is_verified,
                    id: commentsArray[i].node.owner.id,
                    profilePic: commentsArray[i].node.owner.profile_pic_url,
                    name: commentsArray[i].node.owner.username,
                },
                text: commentsArray[i].node.text
            };
        }
        return output;
    }

    axios.get(`https://www.instagram.com/p/${urlHash}/?__a=1`)
        .then(async function (response) {
            const post = {
                user: {
                    is_verified: response.data.graphql.shortcode_media.owner.is_verified,
                    id: response.data.graphql.shortcode_media.owner.id,
                    profilePic: response.data.graphql.shortcode_media.owner.profile_pic_url,
                    name: response.data.graphql.shortcode_media.owner.username,
                    full_name: response.data.graphql.shortcode_media.owner.full_name
                },
                location: verifyPostLocation(response.data.graphql.shortcode_media.location),
                type: verifyPostType(response.data.graphql.shortcode_media.is_video),
                likes: response.data.graphql.shortcode_media.edge_media_preview_like,
                media: {
                    thumbnail: response.data.graphql.shortcode_media.thumbnail_src,
                    picture: response.data.graphql.shortcode_media.display_resources[0].src,
                    video: null // to implement
                }, text: postTextCorrector(response.data.graphql.shortcode_media.edge_media_to_caption.edges[0].node.text),
                comments: {
                    count: response.data.graphql.shortcode_media.edge_media_preview_comment.count,
                    comments: postComments(response.data.graphql.shortcode_media.edge_media_preview_comment.edges)
                }
            }
            build(post);
        })
        .catch(function (error) {
            console.log(`${error} in URL https://www.instagram.com/p/${url}/?__a=1 .`);
            return null
        })
}
function build(data) {
    document.querySelector('body').innerHTML = JSON.stringify(data);
}