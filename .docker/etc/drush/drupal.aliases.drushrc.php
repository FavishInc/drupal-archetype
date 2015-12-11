<?php

$aliases['dev'] = array(
    'root' => '/var/www/dev',
    'site' => 'default',
    'remote-host' => 'HOSTNAME',
    'remote-user' => 'USER',
    'uri' => 'http://HOSTNAME/',
);

$aliases['local'] = array(
  'parent' => '@parent',
  'site' => 'default',
  'env' => 'local',
  'uri' => 'http://archetype.local.favish.com/',
  'root' => '/var/www',
);
