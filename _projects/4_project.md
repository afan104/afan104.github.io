---
layout: page
title: CellSeg-MaskRCNN - Low-Light Microscopy Instance Segmentation
description: Mask R-CNN pipeline for cell instance segmentation in noisy microscopy data
importance: 1
category: vision
---

A Mask R-CNN pipeline (PyTorch, torchvision, PyTorch Lightning) for cell instance segmentation, built during my time as a Machine Learning Researcher at the University of Arizona's Capaldi Lab. Given microscopy images of cells, the model predicts a bounding box, class, and pixel mask for each individual cell instance, architected as a multi-GPU pipeline with custom dataloaders for noisy microscopy data.

Demonstrated feasibility of low-light microscopy instance segmentation: achieved 85% mAP/IoU under low-light conditions, within ~5% of reported well-lit SOTA (~87-90%). Training data was hand-annotated in Photoshop, with custom scripts converting layer-based masks into per-instance JSON labels.

**Stack:** PyTorch, torchvision, PyTorch Lightning, pycocotools, scikit-learn

**Thesis:** [full text (UArizona Repository)](https://repository.arizona.edu/server/api/core/bitstreams/00a61b88-3b9b-482f-bb5b-d66b6d336ab4/content)

**Code:** [github.com/afan104/CellSeg-MaskRCNN](https://github.com/afan104/CellSeg-MaskRCNN)
