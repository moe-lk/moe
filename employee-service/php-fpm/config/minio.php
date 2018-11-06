<?php

require 'vendor/autoload.php';

$s3 = new \Aws\S3\S3Client([
    'version' => 'latest',
    'region'  => 'us-east-1',
    'endpoint' => 'http://192.168.99.1:9000',
    'use_path_style_endpoint' => true,
    'credentials' => [
            'key'    => '126b9d2b52c3a5f9d975',
            'secret' => 'c23708bc3876a6e4e46c623c493b47',
        ],
]);