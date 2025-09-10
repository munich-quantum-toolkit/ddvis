[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://opensource.org/licenses/MIT)
[![CI](https://img.shields.io/github/actions/workflow/status/munich-quantum-toolkit/ddvis/ci.yml?branch=main&style=flat-square&logo=github&label=ci)](https://github.com/munich-quantum-toolkit/ddvis/actions/workflows/ci.yml)

<p align="center">
  <a href="https://mqt.readthedocs.io">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/munich-quantum-toolkit/.github/refs/heads/main/docs/_static/logo-mqt-dark.svg" width="60%">
      <img src="https://raw.githubusercontent.com/munich-quantum-toolkit/.github/refs/heads/main/docs/_static/logo-mqt-light.svg" width="60%" alt="MQT Logo">
    </picture>
  </a>
</p>

# MQT DDVis - An installation-free web-tool for visualizing quantum decision diagrams

MQT DDVis is an installation-free web-tool that visualizes quantum decision diagrams and allows to explore their behavior when used in design tasks such as simulation, synthesis, or verification.
MQT DDVis is hosted at [https://www.cda.cit.tum.de/app/ddvis/](https://www.cda.cit.tum.de/app/ddvis/).
It is part of the [_Munich Quantum Toolkit (MQT)_](https://mqt.readthedocs.io).

## Key Features

MQT DDVis allows users to interactively learn how decision diagrams can be used in quantum computing, e.g., to

- compactly represent quantum states and efficiently simulate quantum circuits,
- compactly represent the functionality of quantum circuits, and
- verify the equivalence of two circuits in an efficient fashion.

If you have any questions, feel free to create a [discussion](https://github.com/munich-quantum-toolkit/ddvis/discussions) or an [issue](https://github.com/munich-quantum-toolkit/ddvis/issues) on [GitHub](https://github.com/munich-quantum-toolkit/ddvis).

## Contributors and Supporters

The _[Munich Quantum Toolkit (MQT)](https://mqt.readthedocs.io)_ is developed by the [Chair for Design Automation](https://www.cda.cit.tum.de/) at the [Technical University of Munich](https://www.tum.de/) and supported by the [Munich Quantum Software Company (MQSC)](https://munichquantum.software).
Among others, it is part of the [Munich Quantum Software Stack (MQSS)](https://www.munich-quantum-valley.de/research/research-areas/mqss) ecosystem, which is being developed as part of the [Munich Quantum Valley (MQV)](https://www.munich-quantum-valley.de) initiative.

<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/munich-quantum-toolkit/.github/refs/heads/main/docs/_static/mqt-logo-banner-dark.svg" width="90%">
    <img src="https://raw.githubusercontent.com/munich-quantum-toolkit/.github/refs/heads/main/docs/_static/mqt-logo-banner-light.svg" width="90%" alt="MQT Partner Logos">
  </picture>
</p>

Thank you to all the contributors who have helped make MQT DDVis a reality!

<p align="center">
  <a href="https://github.com/munich-quantum-toolkit/ddvis/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=munich-quantum-toolkit/ddvis" alt="Contributors to munich-quantum-toolkit/ddvis" />
  </a>
</p>

The MQT will remain free, open-source, and permissively licensed—now and in the future.
We are firmly committed to keeping it open and actively maintained for the quantum computing community.

To support this endeavor, please consider:

- Starring and sharing our repositories: https://github.com/munich-quantum-toolkit
- Contributing code, documentation, tests, or examples via issues and pull requests
- Citing the MQT in your publications (see [Cite This](#cite-this))
- Using the MQT in research and teaching, and sharing feedback and use cases
- Sponsoring us on GitHub: https://github.com/sponsors/munich-quantum-toolkit

<p align="center">
  <a href="https://github.com/sponsors/munich-quantum-toolkit">
  <img width=20% src="https://img.shields.io/badge/Sponsor-white?style=for-the-badge&logo=githubsponsors&labelColor=black&color=blue" alt="Sponsor the MQT" />
  </a>
</p>

## Getting Started

The following commands will build the app and start it.
Open your browser at `localhost:3000` to access the user interface.

```console
git clone --recurse-submodules git@github.com:munich-quantum-toolkit/ddvis.git mqt-ddvis
cd mqt-ddvis
npm install
npm run-script build
npm run-script run
[...]
> node ./bin/www
```

## System Requirements

To run DDVis locally, you will require a C++ compiler with support for C++17, CMake, Node.js, and NPM.

## Cite This

Please cite the work that best fits your use case.

### MQT DDVis (the tool)

When citing the software itself or results produced with it, cite the MQT DDVis paper:

```bibtex
@inproceedings{willeVisualizingDecisionDiagrams2021,
  title        = {Visualizing decision diagrams for quantum computing},
  author       = {Wille, Robert and Burgholzer, Lukas and Artner, Michael},
  year         = {2021},
  booktitle    = {Design, Automation and Test in Europe}
}
```

### The Munich Quantum Toolkit (the project)

When discussing the overall MQT project or its ecosystem, cite the MQT Handbook:

```bibtex
@inproceedings{mqt,
  title        = {The {{MQT}} Handbook: {{A}} Summary of Design Automation Tools and Software for Quantum Computing},
  shorttitle   = {{The MQT Handbook}},
  author       = {Wille, Robert and Berent, Lucas and Forster, Tobias and Kunasaikaran, Jagatheesan and Mato, Kevin and Peham, Tom and Quetschlich, Nils and Rovara, Damian and Sander, Aaron and Schmid, Ludwig and Schoenberger, Daniel and Stade, Yannick and Burgholzer, Lukas},
  year         = 2024,
  booktitle    = {IEEE International Conference on Quantum Software (QSW)},
  doi          = {10.1109/QSW62656.2024.00013},
  eprint       = {2405.17543},
  eprinttype   = {arxiv},
  addendum     = {A live version of this document is available at \url{https://mqt.readthedocs.io}}
}
```

---

## Acknowledgements

The Munich Quantum Toolkit has been supported by the European Research Council (ERC) under the European Union's Horizon 2020 research and innovation program (grant agreement No. 101001318), the Bavarian State Ministry for Science and Arts through the Distinguished Professorship Program, as well as the Munich Quantum Valley, which is supported by the Bavarian state government with funds from the Hightech Agenda Bayern Plus.

<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/munich-quantum-toolkit/.github/refs/heads/main/docs/_static/mqt-funding-footer-dark.svg" width="90%">
    <img src="https://raw.githubusercontent.com/munich-quantum-toolkit/.github/refs/heads/main/docs/_static/mqt-funding-footer-light.svg" width="90%" alt="MQT Funding Footer">
  </picture>
</p>
