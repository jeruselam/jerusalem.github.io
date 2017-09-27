window.data = {
	{% for post in site.posts %}
		{% if post.title %}
			{% unless post.excluded_in_search %}
				{% if added %},{% endif %}
				{% assign added = false %}
				"{{ post.url | slugify }}": {
					"id": "{{ post.url | slugify }}",
					"title": "{{ post.title | xml_escape }}",
					"categories": "{{ post.categories | join: ", " | xml_escape }}",
					"url": " {{ post.url | xml_escape }}",
					"content": {{ post.content | strip_html | replace_regex: "[\s/\n]+"," " | strip | jsonify }}
				}
				{% assign added = true %}
			{% endunless %}
		{% endif %}
	{% endfor %}
};

