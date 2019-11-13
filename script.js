async function getInstagramPostData(urlHash) {
    function verifyPostType(info) {
        if (info.is_video) return "video";
        else if (info.edge_sidecar_to_children) return "album";
        else return "picture";
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
    function buildPostMedia(postType, sidecarChildren) { }
    function postComments(commentsArray) {
        //console.log(commentsArray)
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
        .then(function (response) {
            const post = {
                url: `https://www.instagram.com/p/${urlHash}/`,
                user: {
                    is_verified: response.data.graphql.shortcode_media.owner.is_verified,
                    id: response.data.graphql.shortcode_media.owner.id,
                    profilePic: response.data.graphql.shortcode_media.owner.profile_pic_url,
                    name: response.data.graphql.shortcode_media.owner.username,
                    full_name: response.data.graphql.shortcode_media.owner.full_name
                },
                location: verifyPostLocation(response.data.graphql.shortcode_media.location),
                type: verifyPostType(response.data.graphql.shortcode_media),
                likes: response.data.graphql.shortcode_media.edge_media_preview_like.count,
                media: buildPostMedia(
                    verifyPostType(response.data.graphql.shortcode_media),
                    response.data.graphql.shortcode_media)
                , text: postTextCorrector(response.data.graphql.shortcode_media.edge_media_to_caption.edges[0].node.text),
                comments: {
                    count: response.data.graphql.shortcode_media.edge_media_to_parent_comment.count,
                    comments: postComments(response.data.graphql.shortcode_media.edge_media_to_parent_comment.edges)
                }
            }

            //build(post);
            instagramPostDataBuilder(post);

            console.log(response.data.graphql.shortcode_media)
        })
        .catch(function (error) {
            console.log(`${error} in URL https://www.instagram.com/p/${url}/?__a=1 .`);
            return null
        })
}