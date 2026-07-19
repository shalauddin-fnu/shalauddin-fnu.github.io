---
layout: page
title: Ultrafast Lasers & Experimental Methods
eyebrow: Research and learning area
intro: This section explores the principles and experimental methods of ultrafast laser science, including femtosecond pulse generation and propagation, dispersion, nonlinear frequency conversion, pump-probe timing, and optical alignment. These concepts are connected to experimental techniques for investigating molecular dynamics on ultrafast timescales.
description: Research notes and learning articles about ultrafast lasers, femtosecond optics, and experimental methods.
permalink: /ultrafast-lasers.html
---

{% assign articles = site.learning | where: "topic", "ultrafast-lasers" %}

<section class="topic-articles" aria-label="Ultrafast laser learning articles">
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