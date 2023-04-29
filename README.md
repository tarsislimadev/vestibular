# Vestibular

[![github/actions/workflow/status](https://img.shields.io/github/actions/workflow/status/brtmvdl/vestibular/docker-push.yml)](https://img.shields.io/github/actions/workflow/status/brtmvdl/vestibular/docker-push.yml) [![github/license](https://img.shields.io/github/license/brtmvdl/vestibular)](https://img.shields.io/github/license/brtmvdl/vestibular) [![github/stars](https://img.shields.io/github/stars/brtmvdl/vestibular?style=social)](https://img.shields.io/github/stars/brtmvdl/antify?style=social)

To answer VESTIBULAR questions.

## Android APK (development)

```
wget https://github.com/brtmvdl/vestibular/releases/download/latest/app-debug.apk \
  --output-file=vestibular.apk
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
