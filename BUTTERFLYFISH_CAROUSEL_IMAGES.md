# Adding Butterflyfish Color Pattern Images to Carousel

## Images Needed from ICB 2019 Paper

To complete the carousel update for the butterflyfish color pattern research, please provide:

1. **One or two key figures** from "The evolution of color pattern in butterflyfishes (Chaetodontidae)" (2019 ICB paper)
   - Suggested: Figure showing color pattern diversity across species
   - Suggested: Figure showing phylogenetic patterns of color evolution
   - Format: JPG or PNG, ideally 700x400 pixels (to match carousel format)

2. **Place images** in: `~/Dropbox/git/alfaro-lab/images/slider7001400/`
   - Filename suggestions: `butterflyfish_color_diversity.jpg`, `butterflyfish_phylo_color.jpg`

## Carousel Code Addition

Once you have the images, add these slides to the carousel in `_pages/home.md`:

```html
<!-- Add after existing slides, before </div> closing tag -->
<div class="item">
    <img src="{{ site.url }}{{ site.baseurl }}/images/slider7001400/butterflyfish_color_diversity.jpg" alt="Color pattern diversity in butterflyfishes" />
    <div class="carousel-caption"><a class="cite-link" href="https://doi.org/10.1093/icb/icz119">Alfaro et al. 2019</a></div>
</div>
<div class="item">
    <img src="{{ site.url }}{{ site.baseurl }}/images/slider7001400/butterflyfish_phylo_color.jpg" alt="Phylogenetic patterns of butterflyfish color evolution" />
    <div class="carousel-caption"><a class="cite-link" href="https://doi.org/10.1093/icb/icz119">Alfaro et al. 2019</a></div>
</div>
```

Also update the carousel indicators by adding:
```html
<li data-target="#carousel" data-slide-to="12"></li>
<li data-target="#carousel" data-slide-to="13"></li>
```

## Alternative: Using Existing Lab Images

If you have butterflyfish color pattern images from other lab work or field photos, those would work great too. The key is showcasing the visual diversity that motivates your color evolution research questions.