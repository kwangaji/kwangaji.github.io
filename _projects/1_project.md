---
layout: page
title: Lyric Transcription in Noisy Environments
description: explores how to make lyric transcription actually work in noisy, real-world audio — café recordings, concert clips, and phone-captured music. 
img: assets/img/project1_overview.png
importance: 1
category: work
---
To read the report: 
(Report in PDF available: <a href="../../assets/pdf/lyric_transcription.pdf">Click Here</a>)

Here is a repo project to see the code <a href="https://github.com/drigba/NoisyLyricsTranscription">Click here</a>

## Project Overview — Lyric Transcription in Noisy Environments

This project explores how to make lyric transcription actually work in noisy, real-world audio — café recordings, concert clips, and phone-captured music. Whisper-medium performs well on clean speech, but it falls apart once background noise enters the signal. To handle this, I fine-tuned Whisper-medium on the JamendoLyrics dataset augmented with MUSAN noise across a range of SNR levels.

This simple shift had a major effect: the fine-tuned model achieved a **WER of 18.05%**, while the baseline Whisper model with a Speech Enhancement front-end reached only **63.45%**. Fine-tuning remained stable at SNR values above −2 dB, became unstable at −3 dB, and overfit below −3 dB. Using this insight, I selected the most stable model and tested it on my own recordings — café audio and low-quality concert samples — where it consistently outperformed the baseline.

I also analyzed how Whisper’s internal layers behave under clean and noisy audio. After fine-tuning, the final convolutional and transformer layers showed reduced activation differences between clean and noisy inputs, meaning the model learns more noise-robust representations. This aligns with the improved transcription accuracy.

Overall, this project shows that noise-augmented fine-tuning is more reliable than using external Speech Enhancement for lyric transcription. It also opens space for future work: dynamic SNR scheduling, larger Whisper variants, and multi-stage pipelines that combine source separation with noise-robust training.

<div class="row mt-3">

  <!-- Pair 1 -->
  <div class="col-sm mt-4">
      {% include figure.liquid 
          loading="eager" 
          path="assets/img/result1.png" 
          title="Example image" 
          class="img-fluid rounded z-depth-1" 
      %}
      {% include audio.liquid 
          path="assets/audio/ariana_cafe.wav" 
          controls=true 
      %}
  </div>

  <!-- Pair 2 -->
  <div class="col-sm mt-4">
      {% include figure.liquid 
          loading="eager" 
          path="assets/img/result2.png" 
          title="Example image" 
          class="img-fluid rounded z-depth-1" 
      %}
      {% include audio.liquid 
          path="assets/audio/rock_a_field.mp3" 
          controls=true 
      %}
  </div>

</div>

<div class="caption mt-2">
Left: Ariana Grande playing inside a café. Right: Qsa’a “Rock A Field” concert clip with heavy instrumental. (Lyric transcription in noisy environments: comparison across ground truth, baseline Whisper, and our fine-tuned Whisper model.)
</div>

