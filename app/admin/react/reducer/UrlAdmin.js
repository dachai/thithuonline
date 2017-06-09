/**
 * Created by Dac Hai on 03/06/2017.
 */
var url = {
	// URL Basic
	"frontend" :	"/",
	"admin"    : "/admin",
	// URL Dashboard
	"dashboard" : "/admin/dashboard",
	// URL Media
	"media" : "/admin/media",
	// URL Comment
	"comment" : "/admin/comment",
	// URL User
	"user" : "/admin/user",
	// URL Seo
	"seo" : "/admin/seo",
	// URL Setting
	"setting" : "/admin/setting",
	// URL Post
	"post" : "/admin/post",
	"category"   : "/admin/category",
	"allpost": "/admin/allpost",
	"newpost"  : "/admin/newpost",
	"tag"      : "/admin/tag",
}
var UrlAdmin = (state = url , action) => {
	return state;
}
module.exports = UrlAdmin;
