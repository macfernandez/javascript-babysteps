# javascript-babysteps
Solutions to javascript exercises from Enki's tutorial.

  
{% assign doclist = site.pages | sort: 'url'  %}
<script>
   {% for doc in doclist %}
        {% if doc.name contains '.md' or doc.name contains '.html' %}
            console.log("{{ doc.url }}")
        {% endif %}
    {% endfor %}
</script>
