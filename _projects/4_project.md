---
layout: page
title: GRASP
description: A training-free LLM system that learns from each session to make FPS games clearer, gentler, and easier for older adults to play. (Game Society and Culture Project)
img: assets/img/grasp.gif
importance: 3
category: coursework
---

To read the full report:
(Report PDF: <a href="../../assets/pdf/GRASP_manuscript.pdf">Click here</a>)

This project explores how to make first-person shooter (FPS) games more accessible for older adults in a context where collecting large gameplay datasets is difficult and ethically sensitive. Instead of relying on training data or behavioral modeling, we developed a training-free adaptation system that adjusts game elements—such as UI scale, enemy difficulty, weapon appearance, and thematic tone—based on the needs of older adult players. Because older adults are underrepresented in gaming and often face barriers such as unfamiliar controls, discomfort with violent content, or visually dense interfaces, designing effective adaptations typically lacks actionable data. Our goal is to investigate whether a reasoning-driven system like Reflexion can help bridge this gap by providing scalable, explainable, and personalized accessibility adjustments without requiring any pre-collected dataset.



<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/grasp12.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Overview of Reflexion-Based Multi-Agent Adaptation Architecture.
</div>

Our system adapts the Reflexion architecture into a multi-agent workflow consisting of Evaluator GPT, Reflection GPT, and Actor GPT, each operating between gameplay sessions. After each session, Evaluator GPT analyzes objective performance signals and subjective feedback (e.g., violence comfort, UI readability, narrative engagement) to determine whether the previous configuration succeeded. When needed, Reflection GPT generates design insights using failure patterns and memory of past sessions. Actor GPT then retrieves similar historical cases using FAISS and synthesizes a new “preset string” that encodes modular accessibility changes—such as difficulty (enemy health), UI size, weapon theming, aim-assist settings, and narrative style—which are mapped directly to Unity prefabs to create the next session’s game environment. This Reflexion loop allows the system to iteratively refine gameplay for older adults while remaining interpretable and fully training-free.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/grasp1.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Modular Game Environment and Presets. Each numbered row (1–3) corresponds to a Reflexion gameplay session, showing how modular adaptation dimensions were adjusted over time. Each column illustrates a different gameplay element: (a) the in-game environment, which changes from a realistic construction site (row 1), to a low-poly city (row 2), to a cartoon forest (row 3); (b) Weapon Pickup UI Size, indicated by a yellow outline that increases from small to large across rows; and (c) the weapon and enemy appearance, which shifts from a realistic pistol and human enemy (row 1), to a water gun and banana-man (row 2), to a banana weapon and comical slime enemy (row 3). Narrative Thematic Style is reflected across both (a) and (c), combining environmental context and enemy design. Each adaptation dimension is selected independently, and the figure visualizes how these elements evolved across sessions in response to player feedback.
</div>


