{
  description = "A very basic flake";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system:
      let pkgs = nixpkgs.legacyPackages.${system};
      in rec {
        packages.website = pkgs.stdenv.mkDerivation {
          name = "website";
          src = ./.;
          nativeBuildInputs = with pkgs; [ zola ];
          buildPhase = "${pkgs.zola}/bin/zola build";
          installPhase = "cp -r ./public $out";
        };

        packages.default = packages.website;

        devShell = pkgs.mkShell {
          inputsFrom = [ packages.website ];
          nativeBuildInputs = with pkgs; [ nixfmt ];
        };
      });
}
