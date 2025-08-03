<?php

return [
    'paths' => ['api/*', 'sanctum/csrf-cookie', 'login', 'logout', 'forgot-password', 'reset-password'],
    'allowed_methods' => ['*'],
    'allowed_origins' => ['http://localhost:5173'], // Your React app URL
    'allowed_origins_patterns' => [],
    'allowed_headers' => ['*'],
    'exposed_headers' => [],
    'max_age' => 0,
    'supports_credentials' => true, // Required for Sanctum cookies
];