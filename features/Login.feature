Feature: Iniciar sesión en TAONET
  @LoginAsAdmin
  Scenario: Acceder a TAONET como administrador
    Given Access the app as admin: "administrador" with password: "12Qwaszx"
    When The admin has logged in successfully
    When Log out
    Then The admin has successfully logged out

  @LoginAsMultiUsers
  Scenario Outline: Acceder a TAONET como usuario
    Given Access the app as user <userName> with <password>
    When The admin has logged in successfully
    When Log out
    Then The admin has successfully logged out

    Examples:
      | userName      | password |
      | administrador | 12Qwaszx |
      | steve         | Tester11 |