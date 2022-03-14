# javascript-babysteps
Solutions to javascript exercises from Enki's tutorial.




{% assign doclist = site.pages | sort: 'url'  %}
{% for doc in doclist %}
    {% if doc.name contains '.md' or doc.name contains '.html' %}
        <script>
            console.log("{{ site.pages }}")
            console.log("{{ doc.url }} || {{ doc.name }}")
        </script>
    {% endif %}
{% endfor %}
