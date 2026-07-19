---
layout: page
title: Molecular Dynamics & Coulomb Explosion
eyebrow: Research and learning area
intro: This section develops the physical ideas behind molecular fragmentation and Coulomb explosion imaging. It connects molecular structure, ionization, momentum conservation, kinetic-energy release, and potential-energy surfaces with the experimental observables used to investigate ultrafast molecular dynamics.
description: Research notes and learning articles about molecular dynamics, molecular fragmentation, and Coulomb explosion imaging.
permalink: /molecular-dynamics.html
---

{% assign articles = site.learning | where: "topic", "molecular-dynamics" %}

<section class="topic-articles" aria-label="Molecular dynamics learning articles">
  <h2>Learning articles</h2>

  {% if articles.size > 0 %}
    <div class="article-list">
      {% for article in articles %}
        <article class="article-card">
          {% if article.date %}
            <p class="article-date">{{ article.date | date: "%B %-d, %Y" }}</p>
          {% endif %}

          <h3>
            <a href="{{ article.url | relative_url }}">
              {{ article.title }}
            </a>
          </h3>

          {% if article.summary %}
            <p>{{ article.summary }}</p>
          {% endif %}

          <a class="article-link" href="{{ article.url | relative_url }}">
            Read this article &rarr;
          </a>
        </article>
      {% endfor %}
    </div>
  {% else %}
    <div class="topic-empty">
      <h3>Articles are being prepared</h3>
      <p>
        Individual learning articles will appear here automatically as they
        are added to this topic.
      </p>
    </div>
  {% endif %}
</section>

<p>
  <a class="secondary-button" href="{{ '/' | relative_url }}">
    &larr; Return to homepage
  </a>
</p>