# Vestibular

[![GitHub Workflow Status (with event)](https://img.shields.io/github/actions/workflow/status/brtmvdl/vestibular/docker-pull.yml?label=Docker%20pull&link=https%3A%2F%2Fgithub.com%2Fbrtmvdl%2Fvestibular%2Factions%2Fworkflows%2Fdocker-pull.yml)](https://github.com/brtmvdl/vestibular/blob/main/.github/workflows/docker-push.yml) [![GitHub Workflow Status (with event)](https://img.shields.io/github/actions/workflow/status/brtmvdl/vestibular/docker-push.yml?label=Docker%20push&link=https%3A%2F%2Fgithub.com%2Fbrtmvdl%2Fvestibular%2Factions%2Fworkflows%2Fdocker-push.yml)](https://github.com/brtmvdl/vestibular/actions/workflows/docker-push.yml) [![GitHub Workflow Status (with event)](https://img.shields.io/github/actions/workflow/status/brtmvdl/vestibular/github-release.yml?label=GitHub%20release&link=https%3A%2F%2Fgithub.com%2Fbrtmvdl%2Fvestibular%2Factions%2Fworkflows%2Fgithub-release.yml)](https://github.com/brtmvdl/vestibular/actions/workflows/github-release.yml) [![github/license](https://img.shields.io/github/license/brtmvdl/vestibular)](https://img.shields.io/github/license/brtmvdl/vestibular)  [![github/stars](https://img.shields.io/github/stars/brtmvdl/vestibular?style=social)](https://img.shields.io/github/stars/brtmvdl/vestibular?style=social)

To answer VESTIBULAR questions.

## Android APK (development)

```
wget https://github.com/brtmvdl/vestibular/releases/download/latest/app-debug.apk --output-file=vestibular.apk
```

### Production

```sh
docker run -d -p 80:80 tmvdl/projects:vestibular
```

### Development

```sh
bash env/pull.sh 

bash env/install.sh 

bash env/up.sh 
```

## License

[MIT](./LICENSE)
