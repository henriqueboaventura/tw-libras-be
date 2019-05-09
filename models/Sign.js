var keystone = require("keystone");
var Types = keystone.Field.Types;

var Sign = new keystone.List("Sign", {
	autokey: { path: "slug", from: "title", unique: true },
	map: { name: "title" },
	defaultSort: "-createdAt"
});

Sign.add({
	title: { type: String, required: true },
	createdAt: { type: Date, default: Date.now },
	file: { type: Types.CloudinaryImage },
	description: { type: Types.Textarea, height: 400 },
	status: {
		type: Types.Select,
		options: "new, waiting, published",
		default: "new"
	}
});

Sign.defaultColumns = "title, status|20%, createdAt|15%";
Sign.register();
