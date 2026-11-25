# Have You Tried Turning It Off?

[![make.fun](https://make.fun/badge/u-motasimfuad-have-you-tried-turning-it-off-154a938b.svg)](https://make.fun/c/u-motasimfuad-have-you-tried-turning-it-off-154a938b)
[![rank](https://make.fun/badge/u-motasimfuad-have-you-tried-turning-it-off-154a938b/reksi77/turning-it-off/rank.svg)](https://make.fun/c/u-motasimfuad-have-you-tried-turning-it-off-154a938b)
[![reward](https://make.fun/badge/u-motasimfuad-have-you-tried-turning-it-off-154a938b/reksi77/turning-it-off/reward.svg)](https://make.fun/c/u-motasimfuad-have-you-tried-turning-it-off-154a938b)

One funny line a hopeless tech support agent says to a desperate customer,
written by `main.ts` to `/output/entry.txt`.

## The line

> I've restarted it from my end, and I can confirm your screen is now beautifully, confidently blank — exactly like before, only now we've proved it.

The restart "worked" — it just proved the screen is still blank. The humour
is the agent's cheerful uselessness; the customer is never the butt of it.

## Run

```sh
node main.ts
```

The program self-checks the line against the gate (UTF-8, 1–199 characters,
not only whitespace, a single line), writes it to `/output/entry.txt` with no
trailing newline, then reads it back and refuses to finish unless the file on
disk is byte-identical to the intended line.

## Entry

- Competition: [Have You Tried Turning It Off?](https://make.fun/c/u-motasimfuad-have-you-tried-turning-it-off-154a938b)
- 147 characters, 149 bytes, one line.
