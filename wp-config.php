<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'u1754956_wp164' );

/** Database username */
define( 'DB_USER', 'u1754956_wp164' );

/** Database password */
define( 'DB_PASSWORD', 'hmp]2a-7S1' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'bvuguznvbxo9gkyxk5idcpe67qip1cxngz1qx5rxtra82vczonrqow0bl9uxf8zh' );
define( 'SECURE_AUTH_KEY',  'dtw0rvdou5msm0amxdsebejukisfcriexmomy8kxeocnuwhip8j8jokvk3sbsmsc' );
define( 'LOGGED_IN_KEY',    'nxofqidv0a9dh8wp6epqy1fiupkedpo5e7axx3tjd37z3iwa9ezfgzj32pyqxary' );
define( 'NONCE_KEY',        'fdimx17xux0altjbbthrenond7wduqbwinicywrdrcungepmewm5nl4tvmugiygs' );
define( 'AUTH_SALT',        'qruyala2nwisey6tjqpfhuby12hkg1nvbb8qousxptakpb0ubetux3v6enxauupg' );
define( 'SECURE_AUTH_SALT', 'dm6oqiwpfccijlmrhutqff4h3nuq6cervhkpuylfsozjdlh7folfox9lmsjwwmkc' );
define( 'LOGGED_IN_SALT',   'rw2foy2mt7pfhy0ctfaldikosjuwgggwmhocc5vsecn1tckmxgt9pf453un4k298' );
define( 'NONCE_SALT',       'o6tfudn28tl3fpg2c8gqqqzl9c2jodqkqxjdhah4evljtgxcktwyiiojbg35smkh' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wpln_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
