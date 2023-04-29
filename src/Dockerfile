FROM tmvdl/android:app

WORKDIR /app

RUN cordova create vestibular com.brtmvdl.vestibular vestibular

WORKDIR /app/vestibular

COPY www/html www

RUN cordova platform add android

RUN cordova build android
