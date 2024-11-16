Feature: Iniciar sesión en TAONET
  @LoginAsAdmin
  Scenario: Acceder a TAONET como administrador
    Given Access the app as admin: "administrador" with password: "xxx"
    When The admin has logged in successfully
    When Log out
    Then The admin has successfully logged out

  @LoginAsMultiUsers
  Scenario Outline: Acceder a TAONET como usuario
    Given Access the app as admin "<userName>" with "<password>"
    When The admin has logged in successfully
    When Log out
    Then The admin has successfully logged out

    Examples:
      | userName      | password |
      | administrador | xxx      |
      | steve         | Tester11 |