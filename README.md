# Alfaro Lab Website

This is the website of our academic research group at UCLA.

This website is powered by Jekyll and some Bootstrap, Bootwatch. We tried to make it simple yet adaptable, so that it is easy for you to re-use it for your purpose. Plese feel free to copy and modify for your own purposes.  You don't have to link to us or mention us (but of course we appreciate it).

The site deploys automatically: every push to `main` runs `.github/workflows/build.yml`, which builds with Jekyll + jekyll-scholar and publishes to the `gh-pages` branch. A monthly link check runs from `.github/workflows/links.yml`.

To test-build locally without installing Ruby: `docker run --rm -v "$PWD:/work" -w /work ruby:3.3 bash -c "bundle install --quiet && bundle exec jekyll build"`.

Team page data: `_data/team_members.yml` (current members) and `_data/former_postdocs.yml` (former postdocs). Publications: `_bibliography/references.bib` (`@article` entries render under Publications, `@unpublished` under Preprints).

