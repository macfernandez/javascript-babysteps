# javascript-babysteps
Solutions to javascript exercises from Enki's tutorial.




{% assign doclist = site.pages | sort: 'url'  %}
{% for doc in doclist %}
    {% if doc.name contains '.md' or doc.name contains '.html' %}
        <li><a href="{{ site.baseurl }}{{ doc.url }}">{{ doc.url }}</a></li>
    {% endif %}
{% endfor %}
