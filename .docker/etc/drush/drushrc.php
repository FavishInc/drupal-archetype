<?php

# $options['shell-aliases']['wipe'] = 'cache-clear all';
# $options['shell-aliases']['unsuck'] = 'pm-disable -y overlay,dashboard';
# $options['shell-aliases']['offline'] = 'variable-set -y --always-set maintenance_mode 1';
# $options['shell-aliases']['online'] = 'variable-delete -y --exact maintenance_mode';

$options['shell-aliases']['sync-down-sql'] = "sql-sync @drupal.dev @drupal.local";
$options['shell-aliases']['sync-down-files'] = "rsync @drupal.dev:%files @drupal.local:%files";
$options['shell-aliases']['sync-down-all'] = "!drush sync-down-sql && drush sync-down-files";
$options['shell-aliases']['sda'] = "sync-down-all";

// Add a 'pm-clone' to simplify git cloning from drupal.org.
# $options['shell-aliases']['pm-clone'] = 'pm-download --gitusername=YOURUSERNAME --package-handler=git_drupalorg';

/**
 * List of tables whose *data* is skipped by the 'sql-dump' and 'sql-sync'
 * commands when the "--structure-tables-key=common" option is provided.
 * You may add specific tables to the existing array or add a new element.
 */
# $options['structure-tables']['common'] = array('cache', 'cache_filter', 'cache_menu', 'cache_page', 'history', 'sessions', 'watchdog');
