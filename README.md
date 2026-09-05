# IronLog v3.1
Full 12-week mobile-first training logger.

- Weeks 1–4: Foundation
- Weeks 5–8: Build
- Weeks 9–12: Maintain & Finish
- Warm-up + cool-down every day
- Previous-week performance
- Rest timer
- Back-tolerance logging
- Farmer's Walk: weight + yards
- Suitcase Carry: weight + yards
- Local browser storage

Replace the four existing site files in the Ironlog-v3 GitHub repository with these files.

## v3.3 fix
- Fixed Back button inside workouts on iPhone/Safari.
- Removed reliance on browser-generated globals for element IDs.

## v3.3 changes
- Added explicit superset labels throughout strength/hypertrophy days.
- Day 3 Battle Ropes replaced with Assault Bike: 4 × 30 sec hard / 60 sec easy.
- Removed redundant Bike/Elliptical interval station from Day 3.
- Day 3 now finishes with Zone 2 Elliptical for 15–25 minutes.
- Farmer's Walk and Suitcase Carry retain weight + yards logging.
- Includes the v3.3 iPhone Back-button fix.


## v3.3 — 12-week progression
IronLog now changes prescriptions automatically when you change weeks.

- Weeks 1–3: foundation and progressive loading.
- Week 4: reduced-volume recovery week.
- Weeks 5–7: strength-build phase with the heaviest work in Week 7.
- Week 8: reduced-volume recovery week.
- Weeks 9–11: maintain strength while cutting, with a final heavy exposure in Week 11.
- Week 12: fatigue reduction/taper.
- Main lifts, accessory work, core work, carries, Assault Bike intervals, sled work, Zone 2 elliptical, and Day 5 conditioning all change by week.
- Exercise selection remains mostly consistent so strength can be compared across the full cycle.
- Existing local workout logs are preserved because the storage key remains unchanged.

## v3.4 — set-by-set logging + smart targets
- Every prescribed strength set now has its own weight/reps entry.
- Carries log weight + yards per set; Suitcase Carry also logs L/R per set.
- Previous week's individual sets are shown above the current exercise.
- Each exercise displays a next-target recommendation.
- Rep-range progression: when all logged sets reach the top of the range with back tolerance 0–2, the app suggests a small load increase.
- If back tolerance reaches 3+, the app recommends holding/reducing load rather than progressing.
- Existing older single-entry logs are migrated into Set 1 when opened.
