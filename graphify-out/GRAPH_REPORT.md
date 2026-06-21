# Graph Report - Portfolio Website  (2026-04-30)

## Corpus Check
- 121 files · ~366,827 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 210 nodes · 91 edges · 2 communities detected
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Community 1|Community 1]]
- [[_COMMUNITY_Community 2|Community 2]]

## God Nodes (most connected - your core abstractions)
1. `generateMetadata()` - 2 edges
2. `nodePos()` - 2 edges
3. `centerOf()` - 2 edges

## Surprising Connections (you probably didn't know these)
- None detected - all connections are within the same source files.

## Communities

### Community 1 - "Community 1"
Cohesion: 0.29
Nodes (1): generateMetadata()

### Community 2 - "Community 2"
Cohesion: 0.5
Nodes (2): centerOf(), nodePos()

## Knowledge Gaps
- **Thin community `Community 1`** (7 nodes): `CaseStudyPage()`, `generateMetadata()`, `generateStaticParams()`, `renderSection()`, `WritingPostPage()`, `page.tsx`, `page.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 2`** (5 nodes): `centerOf()`, `cn()`, `getNode()`, `nodePos()`, `flow-preview.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.

## Suggested Questions
_Not enough signal to generate questions. This usually means the corpus has no AMBIGUOUS edges, no bridge nodes, no INFERRED relationships, and all communities are tightly cohesive. Add more files or run with --mode deep to extract richer edges._