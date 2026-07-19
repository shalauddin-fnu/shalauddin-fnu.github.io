---
layout: page
title: Data Analysis & Simulation
eyebrow: Research and learning area
intro: This section focuses on the computational methods used to transform experimental measurements into physical insight. It connects scientific programming, detector calibration, event filtering, momentum reconstruction, data visualization, uncertainty analysis, numerical simulation, and reproducible workflows with the interpretation of ultrafast molecular-dynamics experiments.
description: Research notes and learning articles about scientific programming, momentum reconstruction, data analysis, and simulation.
permalink: /data-analysis.html
---

{% assign articles = site.learning | where: "topic", "data-analysis" %}

<section class="topic-articles" aria-label="Data analysis and simulation learning articles">
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