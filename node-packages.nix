# This file has been generated by node2nix 1.5.3. Do not edit!

{nodeEnv, fetchurl, fetchgit, globalBuildInputs ? []}:

let
  sources = {};
  args = {
    name = "root";
    packageName = "root";
    src = ./.;
    buildInputs = globalBuildInputs;
    meta = {
    };
    production = true;
    bypassCache = false;
  };
in
{
  tarball = nodeEnv.buildNodeSourceDist args;
  package = nodeEnv.buildNodePackage args;
  shell = nodeEnv.buildNodeShell args;
}