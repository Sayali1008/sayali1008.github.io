export interface Project {
  title: string
  tagline: string
  description: string
  tags: string[]
  repo: string
  linkKind: 'github' | 'paper'
}

export const projects: Project[] = [
  {
    title: 'RAG Documentation Assistant',
    tagline: 'RAG · LLM · VECTOR SEARCH',
    description:
      'Retrieval-Augmented Generation system built with LangChain, Chroma vector database, and OpenAI APIs over a synthetic ML knowledge base. Implements the full RAG pipeline — data generation, embedding, vector indexing, and prompt-grounded Q&A — enabling accurate domain-specific answers without fine-tuning.',
    tags: ['Python', 'LangChain', 'Chroma', 'OpenAI API', 'RAG'],
    repo: 'https://github.com/Sayali1008/rag-assistant',
    linkKind: 'github',
  },
  {
    title: 'Hybrid Book Recommendation System',
    tagline: 'ML · API · FULL STACK',
    description:
      'Hybrid recommendation engine combining collaborative filtering (ALS) with 384-dim sentence-transformer embeddings — NDCG@5 of 0.39 across 14.7k items and 26.8k users. FastAPI backend with async ML pipeline orchestration and real-time progress tracking.',
    tags: ['Python', 'FastAPI', 'ALS', 'Sentence Transformers', 'PostgreSQL'],
    repo: 'https://github.com/Sayali1008/conversational-book-recommendation-agent',
    linkKind: 'github',
  },
  {
    title: 'Movie Recommendation Service',
    tagline: 'STREAMING · HIGH SCALE · ML',
    description:
      'ML-powered recommendation engine supporting 1M+ users with sub-500ms response for 40% of requests. Flask + Docker with Kafka streaming for real-time updates, two load-balanced containers (70/30 split), and a Jenkins CI pipeline at 89.55% code coverage.',
    tags: ['Python', 'Flask', 'Docker', 'Kafka', 'Jenkins'],
    repo: 'https://github.com/Sayali1008/Movie-Recommendation-System',
    linkKind: 'github',
  },
  {
    title: 'Deconstructing Stereotypes in LLMs',
    tagline: 'NLP RESEARCH · ACL 2023',
    description:
      'Published in the Queer in AI Workshop at ACL 2023. Used SHAP analysis to detect and mitigate unconscious bias in LLM outputs — applying chain-of-thought prompting to reduce regard difference from 0.15 to 0.06 on a 700k-example WikiBio dataset.',
    tags: ['Python', 'SHAP', 'NLP', 'LLM Bias', 'Chain-of-Thought'],
    repo: 'https://arxiv.org/pdf/2307.00101.pdf',
    linkKind: 'paper',
  },
  {
    title: 'EEG Audio Onset Detection',
    tagline: 'DEEP LEARNING · BIO SIGNALS',
    description:
      'Novel PyTorch approach for predicting audio onsets from EEG signals of 20 participants listening to 10 songs. Improved recall from 0.40 → 0.9245, F1 from 0.54 → 0.6786, and AUC from 0.54 → 0.605 over the baseline — a 2.3× gain driven by architecture and loss-function iteration.',
    tags: ['Python', 'PyTorch', 'EEG', 'Deep Learning', 'Signal Processing'],
    repo: 'https://github.com/Sayali1008/Detecting-Onsets-Using-EEG-Signals',
    linkKind: 'github',
  },
  {
    title: 'ASL to Text Translation',
    tagline: 'EDGE AI · COMPUTER VISION',
    description:
      'On-device sign language recognition deployed on Raspberry Pi. Benchmarked ResNet-50/34/18 on an 87,000-image dataset and applied quantization and pruning to hit inference targets on constrained hardware.',
    tags: ['Python', 'PyTorch', 'ResNet', 'Raspberry Pi', 'Edge AI'],
    repo: 'https://github.com/Sayali1008/ASL-to-Text-Translation-as-an-Assistive-Technology',
    linkKind: 'github',
  },
  {
    title: 'Face Mask Detection & Crowd Counting',
    tagline: 'COMPUTER VISION · IEEE 2021',
    description:
      'Published at the 6th IEEE I2CT Conference (2021). Dual-model system for COVID-era public-safety monitoring: social-distance evaluation using pre-trained YOLOv3 weights (90% accuracy) and a parallel crowd-counting model via object detection (94% accuracy).',
    tags: ['Python', 'YOLOv3', 'Computer Vision', 'Object Detection', 'IEEE'],
    repo: 'https://ieeexplore.ieee.org/document/9417826',
    linkKind: 'paper',
  },
  {
    title: 'Titanic Survival Prediction',
    tagline: 'ML · KAGGLE · CLASSIFICATION',
    description:
      'Comparative study of Decision Tree and Logistic Regression classifiers on the Titanic dataset. Implements both scikit-learn and custom-built versions of each algorithm — benchmarking Gini impurity vs. Entropy splitting for decision trees and validating a from-scratch logistic regression against the library baseline.',
    tags: ['Python', 'scikit-learn', 'Decision Trees', 'Logistic Regression', 'EDA'],
    repo: 'https://github.com/Sayali1008/titanic-machine-learning-from-disaster',
    linkKind: 'github',
  },
]
