<?php
/**
 * Rule processor that performs a comparison operation against the base
 * location - country.
 */

namespace Automattic\WooCommerce\Admin\RemoteInboxNotifications;

use Automattic\WooCommerce\Admin\DeprecatedClassFacade;

defined( 'ABSPATH' ) || exit;

/**
 * Rule processor that performs a comparison operation against the base
 * location - country.
 *
 * @deprecated 8.8.0
 */
class BaseLocationCountryRuleProcessor extends DeprecatedClassFacade {
	/**
	 * The name of the non-deprecated class that this facade covers.
	 *
	 * @var string
	 */
	protected static $facade_over_classname = 'Automattic\WooCommerce\Admin\RemoteSpecs\RuleProcessors\BaseLocationCountryRuleProcessor';

	/**
	 * The version that this class was deprecated in.
	 *
	 * @var string
	 */
	protected static $deprecated_in_version = '8.8.0';
}
