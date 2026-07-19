---
layout: page
title: COLTRIMS & Data Acquisition
eyebrow: Research and learning area
intro: This section examines the COLTRIMS experimental method and the data acquisition systems used to measure charged-particle momenta in coincidence. It connects spectrometer fields, time-of-flight measurements, position-sensitive detectors, timing electronics, coincidence detection, calibration, and event acquisition with the reconstruction of molecular fragmentation processes.
description: Research notes and learning articles about COLTRIMS, coincidence spectroscopy, detectors, and data acquisition.
permalink: /coltrims.html
---

{% assign articles = site.learning | where: "topic", "coltrims" %}

<section class="topic-articles" aria-label="COLTRIMS and data acquisition learning articles">
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