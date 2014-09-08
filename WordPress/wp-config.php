<?php
/** 
 * Configuración básica de WordPress.
 *
 * Este archivo contiene las siguientes configuraciones: ajustes de MySQL, prefijo de tablas,
 * claves secretas, idioma de WordPress y ABSPATH. Para obtener más información,
 * visita la página del Codex{@link http://codex.wordpress.org/Editing_wp-config.php Editing
 * wp-config.php} . Los ajustes de MySQL te los proporcionará tu proveedor de alojamiento web.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

// ** Ajustes de MySQL. Solicita estos datos a tu proveedor de alojamiento web. ** //
/** El nombre de tu base de datos de WordPress */
define('DB_NAME', 'corpobyte');

/** Tu nombre de usuario de MySQL */
define('DB_USER', 'root');

/** Tu contraseña de MySQL */
define('DB_PASSWORD', '');

/** Host de MySQL (es muy probable que no necesites cambiarlo) */
define('DB_HOST', 'localhost');

/** Codificación de caracteres para la base de datos. */
define('DB_CHARSET', 'utf8');

/** Cotejamiento de la base de datos. No lo modifiques si tienes dudas. */
define('DB_COLLATE', '');

/**#@+
 * Claves únicas de autentificación.
 *
 * Define cada clave secreta con una frase aleatoria distinta.
 * Puedes generarlas usando el {@link https://api.wordpress.org/secret-key/1.1/salt/ servicio de claves secretas de WordPress}
 * Puedes cambiar las claves en cualquier momento para invalidar todas las cookies existentes. Esto forzará a todos los usuarios a volver a hacer login.
 *
 * @since 2.6.0
 */
define('AUTH_KEY', '* I-B_80`+UQSKIe1m$;!KL|:N~v`rGWHq^Z&=4jg$Zz;ik[D_lM;A! <`r&3-jV'); // Cambia esto por tu frase aleatoria.
define('SECURE_AUTH_KEY', 'EYg~,bS|w;?16G/#dd?(dguR7wkj1B+DV;>`&pA-Agc+G+me1ei:{CGPjF@*LNgh'); // Cambia esto por tu frase aleatoria.
define('LOGGED_IN_KEY', 'mzsZpubOja%d>G8MBu_st|.2B&d#`-RV-B._=?dj;=+6~x0Tw57fd-ZR;bPHZYHo'); // Cambia esto por tu frase aleatoria.
define('NONCE_KEY', ';+]<tL2v$&!EiVV#QZ?jiu/<`ZpA,4-{,d#<C&2F^R3-CHNlFhR(d/wPP[4+``_9'); // Cambia esto por tu frase aleatoria.
define('AUTH_SALT', 'Vl~=4Rs{{yL%AJ!SA2FWtLci3@v$ULtE^B|NS]9utmyq>>X;fYN|&hkQLNhyHWh^'); // Cambia esto por tu frase aleatoria.
define('SECURE_AUTH_SALT', 'eZj#Q 5{~p[@:uY]kdY@9hp%af%EO{{lsZQ1[q+O]r1[,g@n]+mE$Ti,OMfF=WhK'); // Cambia esto por tu frase aleatoria.
define('LOGGED_IN_SALT', '?]g#vVhr$^InlbW-_a|RI=-k0,-LV6aHz$d-[,fo|Ql,qVLyjPwoeEEE:~aaH{Tp'); // Cambia esto por tu frase aleatoria.
define('NONCE_SALT', 'Di6~VY_6pmL;kw%z=TzA<hgo5T2tvb4^OT>!2D?`)1,zYA X6G$zZDU}!Tv+Q,L{'); // Cambia esto por tu frase aleatoria.

/**#@-*/

/**
 * Prefijo de la base de datos de WordPress.
 *
 * Cambia el prefijo si deseas instalar multiples blogs en una sola base de datos.
 * Emplea solo números, letras y guión bajo.
 */
$table_prefix  = 'wp_';

/**
 * Idioma de WordPress.
 *
 * Cambia lo siguiente para tener WordPress en tu idioma. El correspondiente archivo MO
 * del lenguaje elegido debe encontrarse en wp-content/languages.
 * Por ejemplo, instala ca_ES.mo copiándolo a wp-content/languages y define WPLANG como 'ca_ES'
 * para traducir WordPress al catalán.
 */
define('WPLANG', 'es_ES');

/**
 * Para desarrolladores: modo debug de WordPress.
 *
 * Cambia esto a true para activar la muestra de avisos durante el desarrollo.
 * Se recomienda encarecidamente a los desarrolladores de temas y plugins que usen WP_DEBUG
 * en sus entornos de desarrollo.
 */
define('WP_DEBUG', false);

/* ¡Eso es todo, deja de editar! Feliz blogging */

/** WordPress absolute path to the Wordpress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');

