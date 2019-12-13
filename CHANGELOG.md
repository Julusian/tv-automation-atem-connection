# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [1.3.0](https://github.com/nrkno/tv-automation-atem-connection/compare/0.6.0...1.3.0) (2019-12-13)


### Features

* 8.0.1 support ([eaa1e72](https://github.com/nrkno/tv-automation-atem-connection/commit/eaa1e72b248e8a737dd6b77b652149b2cd40b916))
* add listVisibleInputs method ([#57](https://github.com/nrkno/tv-automation-atem-connection/issues/57)) ([23c9318](https://github.com/nrkno/tv-automation-atem-connection/commit/23c93185fe05c4bf763aefd301717414a5ec8d88))
* add support for MasterChannel ([722d744](https://github.com/nrkno/tv-automation-atem-connection/commit/722d7444fe7c54760538bf7c336112158a1ef803))
* Add test for api methods which change command based on version ([7208ee4](https://github.com/nrkno/tv-automation-atem-connection/commit/7208ee44d020b77fff2870c609bf41462597940a))
* add test to verify that all commands have serialization test cases ([3cb9ae7](https://github.com/nrkno/tv-automation-atem-connection/commit/3cb9ae7769c0365e33b25f1b2e8f46bd79f48b2c))
* audio channels ([1b3bd32](https://github.com/nrkno/tv-automation-atem-connection/commit/1b3bd32a12a215b547739d01e174de1118f8d705))
* clear media pool ([9f64e58](https://github.com/nrkno/tv-automation-atem-connection/commit/9f64e588fa865ca655dafcd329042cd8cd58031b))
* clear media pool ([310308b](https://github.com/nrkno/tv-automation-atem-connection/commit/310308bcbe5f7ecd3488dfcc4d54fd9f9d86fe66))
* Data Commands ([2e14efb](https://github.com/nrkno/tv-automation-atem-connection/commit/2e14efb2b556074b662cce0735802b62c4b0bc7c))
* Data Commands ([d1bf2ba](https://github.com/nrkno/tv-automation-atem-connection/commit/d1bf2ba2f42c87d6f92551c7d1450f33cdcc2969))
* Enable and fix v8 command tests ([3a7d23d](https://github.com/nrkno/tv-automation-atem-connection/commit/3a7d23d2fd6310c510a74be51060475fa8b212d7))
* enable running tests in circleci ([662638d](https://github.com/nrkno/tv-automation-atem-connection/commit/662638dc05224bf3f878fa46e2e332abe6c6fc77))
* expect commands to be split to be a serialize or deserialize (unless they use the same name for both) ([e9704f2](https://github.com/nrkno/tv-automation-atem-connection/commit/e9704f265039334ec73d6b56499a56a5c447d8e0))
* expose setFadeToBlackRate ([fa974a4](https://github.com/nrkno/tv-automation-atem-connection/commit/fa974a4412344054eca0cf9950aa5943381452d7))
* FadeToBlack control ([660e8dc](https://github.com/nrkno/tv-automation-atem-connection/commit/660e8dc2859d22a6d183c2038ce633f988efa51a))
* initial multi-version support ([fedc690](https://github.com/nrkno/tv-automation-atem-connection/commit/fedc69024f0814c871739d387653590a5dfa3dab))
* Media Upload API, File Transfer Manager ([c240477](https://github.com/nrkno/tv-automation-atem-connection/commit/c24047734383af499416b56a5d2fc3f20605eede))
* Media Upload API, File Transfer Manager ([c5e4684](https://github.com/nrkno/tv-automation-atem-connection/commit/c5e4684b1574895391ae917ae79596bbad6f363f))
* prototype serialize command ([010fff2](https://github.com/nrkno/tv-automation-atem-connection/commit/010fff224eb85b490f339cf07ef695d5b551779a))
* prototype what separate command converter structures would look like ([378be83](https://github.com/nrkno/tv-automation-atem-connection/commit/378be83ce827201c89e0ccf5a1a0ee6ec0f07a47))
* refactor circleci config ([a7b0ca2](https://github.com/nrkno/tv-automation-atem-connection/commit/a7b0ca249b9e104833e8abde6d97e82934c8a14d))
* Rename downstreamKeyId to downstreamKeyerId to make them all consistent and be consistent with upstream keyer ([58f61ee](https://github.com/nrkno/tv-automation-atem-connection/commit/58f61eea25125395f3cf5857262ad1ba3ae2f97f))
* restructure some core buffer usage, and move command header (length + name) writing into common command serialization code ([3c8b062](https://github.com/nrkno/tv-automation-atem-connection/commit/3c8b062c6b6fa2221081a5bd2b0e4beb59cf9ae5))
* split some commands ([beae1c4](https://github.com/nrkno/tv-automation-atem-connection/commit/beae1c4d48b0fd0bc9957a626f328823f4f71ae4))
* stateChanged events report a path instead of the Command ([845909f](https://github.com/nrkno/tv-automation-atem-connection/commit/845909f5ddc8c47079cb5416b4ca27c782ab4e6d))
* top level methods for audio channels ([6c390d3](https://github.com/nrkno/tv-automation-atem-connection/commit/6c390d332ec9fc84008c7241fa8fc5c415414a64))
* TransferManager ([a2588a7](https://github.com/nrkno/tv-automation-atem-connection/commit/a2588a737b67669875e147c5acf30892ff0c960f))
* TransferManager ([a9336c9](https://github.com/nrkno/tv-automation-atem-connection/commit/a9336c99d9003f31783806dffad19abe2305f558))
* TransferManager ([e3e69a1](https://github.com/nrkno/tv-automation-atem-connection/commit/e3e69a12cc5e464c880d75c8c507064292b918ea))
* update ci to run for node 8,10,12 ([25f1fb1](https://github.com/nrkno/tv-automation-atem-connection/commit/25f1fb13d6c3d551ecc5f35ad05375858d18dcc7))
* use a nanotimer in socket child for ack'ing ([84482ca](https://github.com/nrkno/tv-automation-atem-connection/commit/84482cad64bf5213eef1ce99eaaecc2e36762ae8))
* **DataTransfer:** add errorCode property to DataTransferErrorCommand ([d8b2d5f](https://github.com/nrkno/tv-automation-atem-connection/commit/d8b2d5f548200b232e6b49a619cd2c45dd58d9a6))
* **DataTransfer:** add errorCode property to DataTransferErrorCommand ([7e302e1](https://github.com/nrkno/tv-automation-atem-connection/commit/7e302e19554541b14e0f333685f71300e7df5bcf))
* **Media:** Media Pool Description Commands ([5050fe8](https://github.com/nrkno/tv-automation-atem-connection/commit/5050fe8a1a27b4f2b7707dde843c94756a7e26e9))
* **Media:** Media Pool Description Commands ([fbae9b1](https://github.com/nrkno/tv-automation-atem-connection/commit/fbae9b1d2d6d7cf8eefd75dbbdb283ea3f4d1265))
* **Media Pool:** clear / set commands ([a2ecc82](https://github.com/nrkno/tv-automation-atem-connection/commit/a2ecc82fa56f3861ed26d3f44dc314e3772d1482))
* TransferManager ([ee3ed26](https://github.com/nrkno/tv-automation-atem-connection/commit/ee3ed2612ab606a214bc37e9a45b4d53ebe6874d))
* Video Mode command ([b9980e3](https://github.com/nrkno/tv-automation-atem-connection/commit/b9980e3e7f65e73b79e9a4b0adf4e785f152851b))
* **Media Pool:** clear / set commands ([40fce0c](https://github.com/nrkno/tv-automation-atem-connection/commit/40fce0c09596975363254f4d65370cc58099df4c))
* Video Mode command ([c87c0b8](https://github.com/nrkno/tv-automation-atem-connection/commit/c87c0b8c71efc59ff152b5632da0b428d52a15fd))


### Bug Fixes

* ack'ing after init ([8197ab5](https://github.com/nrkno/tv-automation-atem-connection/commit/8197ab59990d3c34cce996e3208c9244dce3dd61))
* add missing TVS-pro models to Model enum ([8ac6777](https://github.com/nrkno/tv-automation-atem-connection/commit/8ac67776e8a419bb41ac0e543545b73210029673))
* AudioMixerInputCommand ([69608c7](https://github.com/nrkno/tv-automation-atem-connection/commit/69608c76dc36e1c704c7e39c7d31ee88c24614d8))
* behaviour around packetId wrapping ([9c8e3a8](https://github.com/nrkno/tv-automation-atem-connection/commit/9c8e3a898217780e2a57b0cc962e7ca4023651ea))
* behaviour around packetId wrapping ([d8e4626](https://github.com/nrkno/tv-automation-atem-connection/commit/d8e4626a654b81ef63bf9af17d39e568403137f4))
* better support for constellation ([b540f11](https://github.com/nrkno/tv-automation-atem-connection/commit/b540f11a0104772ef94603068dc1e2107314ea60))
* better support for constellation ([#58](https://github.com/nrkno/tv-automation-atem-connection/issues/58)) ([5bb512d](https://github.com/nrkno/tv-automation-atem-connection/commit/5bb512d983beab958e97eab94faac1a1ecd4750c))
* broken autoDownstreamKey function and mangled multiviewer window state ([71c61f6](https://github.com/nrkno/tv-automation-atem-connection/commit/71c61f66529168615e99622da32ebc14e17c4918))
* child process timeout ([8196d8e](https://github.com/nrkno/tv-automation-atem-connection/commit/8196d8ef34579b9ffff96d46f8bcd9d4ce5c11cb))
* colour space ([bb19e9e](https://github.com/nrkno/tv-automation-atem-connection/commit/bb19e9eb83a1b3a8b21d1342ce991b0aa5cf5038))
* colour space ([8f295d3](https://github.com/nrkno/tv-automation-atem-connection/commit/8f295d3d0cec21086a5f4bfa12830dc462dfcacf))
* consistent API for super source methods ([4327660](https://github.com/nrkno/tv-automation-atem-connection/commit/4327660dfbc6b4d72aa4b33c9046dabf2fc6e97e))
* convencience method for setting clip in MP ([b5455a3](https://github.com/nrkno/tv-automation-atem-connection/commit/b5455a3616758caebde6ad3fd64ca84382c16231))
* convencience method for setting clip in MP ([a8feeef](https://github.com/nrkno/tv-automation-atem-connection/commit/a8feeef03dd8ed7421f49c68b2dd3a54bcbdccb8))
* data transfer uses old command names ([e6a6bd0](https://github.com/nrkno/tv-automation-atem-connection/commit/e6a6bd028b4183d5490a97578de38ea63ea520d3))
* disable unsupported v8 tests ([8bcafb5](https://github.com/nrkno/tv-automation-atem-connection/commit/8bcafb521f7c60907a4bcdb29e14873947572827))
* do not ack discontinuous packet sequences ([91f36bf](https://github.com/nrkno/tv-automation-atem-connection/commit/91f36bfa34ca23864fe62b8f2bcd78d42e985c0c))
* do not ack discontinuous packet sequences ([1bde19d](https://github.com/nrkno/tv-automation-atem-connection/commit/1bde19d082aef87dc6eed867ab543c349d6dbe74))
* do not ack discontinuous packet sequences ([bfb679f](https://github.com/nrkno/tv-automation-atem-connection/commit/bfb679f3e1f77372c00824f0cfac6f8fe71173f2))
* dve value range ([33784bc](https://github.com/nrkno/tv-automation-atem-connection/commit/33784bc6e9fe12f2e8d5a53745411b3f5dad8ded))
* exclude test helpers in build ([041c37f](https://github.com/nrkno/tv-automation-atem-connection/commit/041c37f810fe3ab871c3b3e7dddad644926d3c8d))
* exit cleanly after running tests ([c23a9f9](https://github.com/nrkno/tv-automation-atem-connection/commit/c23a9f9a0ca7ffb9b7afb49d8f54d76a41eaaf60))
* file description cmd does not always need name / descr. ([8837dd0](https://github.com/nrkno/tv-automation-atem-connection/commit/8837dd0d3a64b312df92acd85056323a2940cdde))
* file description cmd does not always need name / descr. ([683d83b](https://github.com/nrkno/tv-automation-atem-connection/commit/683d83b5edb81a68f55f936b06cc10b4f6d9cb0f))
* fix error spam that occurs when the child process attempts to log certain data ([7c9e31c](https://github.com/nrkno/tv-automation-atem-connection/commit/7c9e31c77c0ec9f0d084255ebc1c86f6f7160a79))
* fixed parsing of audioMixer input ([3430cb7](https://github.com/nrkno/tv-automation-atem-connection/commit/3430cb7932427055960efc2008b935d04d62e5e7))
* frame description file name ([1c7290d](https://github.com/nrkno/tv-automation-atem-connection/commit/1c7290d4181dbfb91ce9a057e8714b4985a8c482))
* frame description file name ([bc1224b](https://github.com/nrkno/tv-automation-atem-connection/commit/bc1224b0ff7bb377f40e0b1e04159bf98f7120ff))
* ignore failing tests ([8cfcfaf](https://github.com/nrkno/tv-automation-atem-connection/commit/8cfcfafa00e26aa21ca857e5d3760271f9ad4e93))
* improve commandParser typings ([1e26d6d](https://github.com/nrkno/tv-automation-atem-connection/commit/1e26d6d44d1363d3419459aa11f7e5129c596c06))
* improve reliability of resending ([ccaa051](https://github.com/nrkno/tv-automation-atem-connection/commit/ccaa0514a9aa1b5cff602260bf96d89190047572))
* incorrect order in ci release step ([ca0d207](https://github.com/nrkno/tv-automation-atem-connection/commit/ca0d207a04d8a19cd53308d83e05e12c2808f852))
* kill the child process with an error code with an uncaughtException or unhandledRejection occurs ([e5323c9](https://github.com/nrkno/tv-automation-atem-connection/commit/e5323c9090ba1346eae4d7b282feaf1fcb3aa219))
* let node bind to a random port for our udp socket ([b7be165](https://github.com/nrkno/tv-automation-atem-connection/commit/b7be165ffd452ef05df0c1ea931322e6649cf6b1))
* lint ([61ba6f8](https://github.com/nrkno/tv-automation-atem-connection/commit/61ba6f85893b0a5a7f6799d777b0e7a49e9ab6b4))
* lint ([666cff5](https://github.com/nrkno/tv-automation-atem-connection/commit/666cff50f08e215a4ffbc9c47813d53e3a15f92e))
* Make buffer use in serialize consistent. Remove setting command name in serialize. ([40eec6e](https://github.com/nrkno/tv-automation-atem-connection/commit/40eec6ed2480328a313c6ccaae0ec854eb7a4b86))
* Media Player Source Command ([3103ca6](https://github.com/nrkno/tv-automation-atem-connection/commit/3103ca682e2a248b105889a46cbba88e02f98310))
* Media Player Source Command ([5c1ebb1](https://github.com/nrkno/tv-automation-atem-connection/commit/5c1ebb16ef57afda66b377eab6859f9848c07da5))
* media player source still & clip inverted ([6dec48f](https://github.com/nrkno/tv-automation-atem-connection/commit/6dec48f09e4c02d404578095bb7e2cac551d398c))
* messages without correct transferid will be ignored ([301c545](https://github.com/nrkno/tv-automation-atem-connection/commit/301c545bf2ab12239100d7a26c219bd23329ce70))
* more aggressive resend strategy ([d1fd66c](https://github.com/nrkno/tv-automation-atem-connection/commit/d1fd66c2c07417dec41a8062644a5ad533a872b7))
* more aggressive resend strategy ([8900ded](https://github.com/nrkno/tv-automation-atem-connection/commit/8900dede8c4dce23cd385d8966af01fba29ef086))
* More command test data mangling ([8bd9009](https://github.com/nrkno/tv-automation-atem-connection/commit/8bd900926cea719aa9f6cff3c43207ef1df05aaa))
* multiviewer state initialization ([2547af1](https://github.com/nrkno/tv-automation-atem-connection/commit/2547af1b24c1d140f2f6a0cc72611a40de38445f))
* one object per multiviewer in the state ([5f53526](https://github.com/nrkno/tv-automation-atem-connection/commit/5f535264ee1a906f065ab69fb167a1a76db0367d))
* optimize inFlightTimeout ([0812a63](https://github.com/nrkno/tv-automation-atem-connection/commit/0812a6396a8a5dd04e57d2b18b48add3dcb1d143))
* optimize inFlightTimeout ([32b3c44](https://github.com/nrkno/tv-automation-atem-connection/commit/32b3c44f52b6f31873ae7689c71b6720a28fccb5))
* parse productIdentifierCommand successfully even for unknown models ([d991fdd](https://github.com/nrkno/tv-automation-atem-connection/commit/d991fddabf84e977c7a53197a4208e717d68e782))
* regenerate commands test data ([fe619c4](https://github.com/nrkno/tv-automation-atem-connection/commit/fe619c4059cf22dc02fdbe6ca5e60e4b3869136f))
* reject timed out commands ([a8cfa68](https://github.com/nrkno/tv-automation-atem-connection/commit/a8cfa68fb11b8db9ed044cf278d7bc915083336c))
* reject timed out commands ([fd3d045](https://github.com/nrkno/tv-automation-atem-connection/commit/fd3d045f8c2fcfb4ba4e12179ac50b3305f242b6))
* rename setAudioChannelXX methods to setAudioMixerInputXXX to harmonize with other audio commands ([77fe521](https://github.com/nrkno/tv-automation-atem-connection/commit/77fe5217111076ebeb5fb36abeca25ada414cdba))
* restructure all command tests to use new structure ([957ed76](https://github.com/nrkno/tv-automation-atem-connection/commit/957ed760972c5053f29a9c0f3240fc99ffa68c7f))
* revert new packetId on resend ([2fe6368](https://github.com/nrkno/tv-automation-atem-connection/commit/2fe636817bcdb6d7f5d0dc5353e2a2466a69a8d8))
* set enum values explicitly ([bd50491](https://github.com/nrkno/tv-automation-atem-connection/commit/bd5049101d2e4e2cf5c13be29846e79e0fad8935))
* socket process exits when parent process does ([#30](https://github.com/nrkno/tv-automation-atem-connection/issues/30)) ([4754cc7](https://github.com/nrkno/tv-automation-atem-connection/commit/4754cc75d8ae085cea749d1532e98a3b751981bb))
* some broken cases ([9ebde2e](https://github.com/nrkno/tv-automation-atem-connection/commit/9ebde2ea6291025fa77e0e581a89c0272f0181e0))
* some more command serialization ([cf66953](https://github.com/nrkno/tv-automation-atem-connection/commit/cf669534bfbc89c8ff578a5bb6e6d3b88979d9f8))
* some tests ([3f14715](https://github.com/nrkno/tv-automation-atem-connection/commit/3f147159dc0f20d15e8d9165c69d5e9e4d91b89e))
* SuperSourceConfigCommand broken ([ccc7d33](https://github.com/nrkno/tv-automation-atem-connection/commit/ccc7d333e226ec0e7f9c09f640789d5520d7061a))
* tidy up some commented out code ([f1a1252](https://github.com/nrkno/tv-automation-atem-connection/commit/f1a1252a60301506433ea8a8c776eb3d8d07c186))
* topology command ([e5812d9](https://github.com/nrkno/tv-automation-atem-connection/commit/e5812d9532c7ea06670e46d2cbdb5d1d7304f222))
* update ci ([f396e3e](https://github.com/nrkno/tv-automation-atem-connection/commit/f396e3e0beebdf6eddf7bb7de8a2f105f503828a))
* **atemSocket:** fix _maxPacketID being off-by-one ([4efecdd](https://github.com/nrkno/tv-automation-atem-connection/commit/4efecdd08e46284e0a5fde308c34be391f4ef816))
* **atemSocket:** fix _maxPacketID being off-by-one ([ee70083](https://github.com/nrkno/tv-automation-atem-connection/commit/ee70083c76f70dbb2f33aad473792a5f75d6112c))
* **AudioMixerInputCommand:** sign in deserialization  ([d9a3865](https://github.com/nrkno/tv-automation-atem-connection/commit/d9a38651f5f6a60ed140b74f24b108be036ab755))
* **AudioMixerMasterCommand:** set flag properly ([78fa0b5](https://github.com/nrkno/tv-automation-atem-connection/commit/78fa0b58e608723f99738a39766e4894e1b18e32))
* **Data Command:** size property ([df16109](https://github.com/nrkno/tv-automation-atem-connection/commit/df1610907848f70a1dfa369af9b6026dff0ed34c))
* **Data Command:** size property ([35a846d](https://github.com/nrkno/tv-automation-atem-connection/commit/35a846d145d74c230eec230640ea648580c4ab26))
* **Data Transfer:** remove old commands after failing ([09ee4b4](https://github.com/nrkno/tv-automation-atem-connection/commit/09ee4b41b514ebef981b3a29924a6afccb84b50a))
* **Data Transfer:** remove old commands after failing ([dfa1cfc](https://github.com/nrkno/tv-automation-atem-connection/commit/dfa1cfc0acbf743cb755d18117bd4d73ec5f08c4))
* **Data Transfer:** stop condition, send description only once ([bca847f](https://github.com/nrkno/tv-automation-atem-connection/commit/bca847f7040820da42bbd21aa87e03aa34d6b42c))
* **Data Transfer:** stop condition, send description only once ([627c9f2](https://github.com/nrkno/tv-automation-atem-connection/commit/627c9f29fc181a8d586c7d15dd45ac2672c30e0a))
* **dataTransfer:** ignore unexpected DataTransferCompleteCommands ([517253d](https://github.com/nrkno/tv-automation-atem-connection/commit/517253d1a442792373da383496f8a006cfb09c92))
* **dataTransfer:** ignore unexpected DataTransferCompleteCommands ([1f97a4a](https://github.com/nrkno/tv-automation-atem-connection/commit/1f97a4a659e3eb82f389bac664f6168fd8455923))
* **dataTrasnfer:** fail when a DataTransferErrorCommand is received ([441ef68](https://github.com/nrkno/tv-automation-atem-connection/commit/441ef688b53df7ac16ad8599ed1c69f9851d0a12))
* **dataTrasnfer:** fail when a DataTransferErrorCommand is received ([ba17501](https://github.com/nrkno/tv-automation-atem-connection/commit/ba1750123a4043091b22490e28cb5dc54414ad78))
* **Media:** fix Util imports ([55a1f28](https://github.com/nrkno/tv-automation-atem-connection/commit/55a1f285f8753f11e14efa4570c4b4905fca17ef))
* **Media:** fix Util imports ([7f0577a](https://github.com/nrkno/tv-automation-atem-connection/commit/7f0577a6ffbea4ca34d22b2f9e8da7cdea9417d0))
* **MediaPlayerSourceCommand:** order of serialization ([a0a89f3](https://github.com/nrkno/tv-automation-atem-connection/commit/a0a89f3fe6e296196cb44265e3ac071c2be661e7))
* **MixEffectFlyKeyFrameGetCommand:** correct validators ([a1648c1](https://github.com/nrkno/tv-automation-atem-connection/commit/a1648c1fb0d20b8aa518c71ce7e7434001be447f))
* timers are cleaned when calling disconnect, even when not connected ([d3040d1](https://github.com/nrkno/tv-automation-atem-connection/commit/d3040d10c1f10182eaec3c3cd481be0ade8d56fc))
* upgrade dependencies to pass audit ([98d16a8](https://github.com/nrkno/tv-automation-atem-connection/commit/98d16a8bd52de7bd68430b34a627fdb10b936819))
* upgrade typescript to latest ([b68afbf](https://github.com/nrkno/tv-automation-atem-connection/commit/b68afbf7ba122e0a2f9cc333887ba292a1772757))
* **perf:** remove nanotimer for intervals as it uses 100% cpu ([d7bc543](https://github.com/nrkno/tv-automation-atem-connection/commit/d7bc5435ef17064c296e676ad294f462fc1db29a))

## [1.2.0](https://github.com/nrkno/tv-automation-atem-connection/compare/1.1.0...1.2.0) (2019-12-13)


### Features

* add listVisibleInputs method ([#57](https://github.com/nrkno/tv-automation-atem-connection/issues/57)) ([23c9318](https://github.com/nrkno/tv-automation-atem-connection/commit/23c93185fe05c4bf763aefd301717414a5ec8d88))
* expose setFadeToBlackRate ([fa974a4](https://github.com/nrkno/tv-automation-atem-connection/commit/fa974a4412344054eca0cf9950aa5943381452d7))


### Bug Fixes

* add missing TVS-pro models to Model enum ([8ac6777](https://github.com/nrkno/tv-automation-atem-connection/commit/8ac67776e8a419bb41ac0e543545b73210029673))

## [1.1.0](https://github.com/nrkno/tv-automation-atem-connection/compare/1.0.2...1.1.0) (2019-10-24)


### Features

* refactor circleci config ([a7b0ca2](https://github.com/nrkno/tv-automation-atem-connection/commit/a7b0ca249b9e104833e8abde6d97e82934c8a14d))
* update ci to run for node 8,10,12 ([25f1fb1](https://github.com/nrkno/tv-automation-atem-connection/commit/25f1fb13d6c3d551ecc5f35ad05375858d18dcc7))


### Bug Fixes

* incorrect order in ci release step ([ca0d207](https://github.com/nrkno/tv-automation-atem-connection/commit/ca0d207a04d8a19cd53308d83e05e12c2808f852))
* parse productIdentifierCommand successfully even for unknown models ([d991fdd](https://github.com/nrkno/tv-automation-atem-connection/commit/d991fddabf84e977c7a53197a4208e717d68e782))
* SuperSourceConfigCommand broken ([ccc7d33](https://github.com/nrkno/tv-automation-atem-connection/commit/ccc7d333e226ec0e7f9c09f640789d5520d7061a))

### [1.0.2](https://github.com/nrkno/tv-automation-atem-connection/compare/1.0.1...1.0.2) (2019-10-09)


### Bug Fixes

* media player source still & clip inverted ([6dec48f](https://github.com/nrkno/tv-automation-atem-connection/commit/6dec48f09e4c02d404578095bb7e2cac551d398c))

### [1.0.1](https://github.com/nrkno/tv-automation-atem-connection/compare/1.0.0...1.0.1) (2019-09-21)


### Bug Fixes

* better support for constellation ([b540f11](https://github.com/nrkno/tv-automation-atem-connection/commit/b540f11))
* better support for constellation ([#58](https://github.com/nrkno/tv-automation-atem-connection/issues/58)) ([5bb512d](https://github.com/nrkno/tv-automation-atem-connection/commit/5bb512d))

## [1.0.0](https://github.com/nrkno/tv-automation-atem-connection/compare/0.10.0...1.0.0) (2019-09-17)


### Bug Fixes

* broken autoDownstreamKey function and mangled multiviewer window state ([71c61f6](https://github.com/nrkno/tv-automation-atem-connection/commit/71c61f6))
* consistent API for super source methods ([4327660](https://github.com/nrkno/tv-automation-atem-connection/commit/4327660))
* data transfer uses old command names ([e6a6bd0](https://github.com/nrkno/tv-automation-atem-connection/commit/e6a6bd0))
* disable unsupported v8 tests ([8bcafb5](https://github.com/nrkno/tv-automation-atem-connection/commit/8bcafb5))
* dve value range ([33784bc](https://github.com/nrkno/tv-automation-atem-connection/commit/33784bc))
* exclude test helpers in build ([041c37f](https://github.com/nrkno/tv-automation-atem-connection/commit/041c37f))
* exit cleanly after running tests ([c23a9f9](https://github.com/nrkno/tv-automation-atem-connection/commit/c23a9f9))
* ignore failing tests ([8cfcfaf](https://github.com/nrkno/tv-automation-atem-connection/commit/8cfcfaf))
* improve commandParser typings ([1e26d6d](https://github.com/nrkno/tv-automation-atem-connection/commit/1e26d6d))
* Make buffer use in serialize consistent. Remove setting command name in serialize. ([40eec6e](https://github.com/nrkno/tv-automation-atem-connection/commit/40eec6e))
* More command test data mangling ([8bd9009](https://github.com/nrkno/tv-automation-atem-connection/commit/8bd9009))
* multiviewer state initialization ([2547af1](https://github.com/nrkno/tv-automation-atem-connection/commit/2547af1))
* regenerate commands test data ([fe619c4](https://github.com/nrkno/tv-automation-atem-connection/commit/fe619c4))
* restructure all command tests to use new structure ([957ed76](https://github.com/nrkno/tv-automation-atem-connection/commit/957ed76))
* some broken cases ([9ebde2e](https://github.com/nrkno/tv-automation-atem-connection/commit/9ebde2e))
* some more command serialization ([cf66953](https://github.com/nrkno/tv-automation-atem-connection/commit/cf66953))
* some tests ([3f14715](https://github.com/nrkno/tv-automation-atem-connection/commit/3f14715))
* **AudioMixerInputCommand:** sign in deserialization  ([d9a3865](https://github.com/nrkno/tv-automation-atem-connection/commit/d9a3865))
* **MediaPlayerSourceCommand:** order of serialization ([a0a89f3](https://github.com/nrkno/tv-automation-atem-connection/commit/a0a89f3))
* **MixEffectFlyKeyFrameGetCommand:** correct validators ([a1648c1](https://github.com/nrkno/tv-automation-atem-connection/commit/a1648c1))
* tidy up some commented out code ([f1a1252](https://github.com/nrkno/tv-automation-atem-connection/commit/f1a1252))
* topology command ([e5812d9](https://github.com/nrkno/tv-automation-atem-connection/commit/e5812d9))


### Features

* 8.0.1 support ([eaa1e72](https://github.com/nrkno/tv-automation-atem-connection/commit/eaa1e72))
* Add test for api methods which change command based on version ([7208ee4](https://github.com/nrkno/tv-automation-atem-connection/commit/7208ee4))
* add test to verify that all commands have serialization test cases ([3cb9ae7](https://github.com/nrkno/tv-automation-atem-connection/commit/3cb9ae7))
* Enable and fix v8 command tests ([3a7d23d](https://github.com/nrkno/tv-automation-atem-connection/commit/3a7d23d))
* enable running tests in circleci ([662638d](https://github.com/nrkno/tv-automation-atem-connection/commit/662638d))
* expect commands to be split to be a serialize or deserialize (unless they use the same name for both) ([e9704f2](https://github.com/nrkno/tv-automation-atem-connection/commit/e9704f2))
* FadeToBlack control ([660e8dc](https://github.com/nrkno/tv-automation-atem-connection/commit/660e8dc))
* initial multi-version support ([fedc690](https://github.com/nrkno/tv-automation-atem-connection/commit/fedc690))
* prototype serialize command ([010fff2](https://github.com/nrkno/tv-automation-atem-connection/commit/010fff2))
* prototype what separate command converter structures would look like ([378be83](https://github.com/nrkno/tv-automation-atem-connection/commit/378be83))
* restructure some core buffer usage, and move command header (length + name) writing into common command serialization code ([3c8b062](https://github.com/nrkno/tv-automation-atem-connection/commit/3c8b062))
* split some commands ([beae1c4](https://github.com/nrkno/tv-automation-atem-connection/commit/beae1c4))
* stateChanged events report a path instead of the Command ([845909f](https://github.com/nrkno/tv-automation-atem-connection/commit/845909f))

# [0.10.0](https://github.com/nrkno/tv-automation-atem-connection/compare/0.9.0...0.10.0) (2019-04-02)


### Bug Fixes

* fix error spam that occurs when the child process attempts to log certain data ([7c9e31c](https://github.com/nrkno/tv-automation-atem-connection/commit/7c9e31c))
* fixed parsing of audioMixer input ([3430cb7](https://github.com/nrkno/tv-automation-atem-connection/commit/3430cb7))
* kill the child process with an error code with an uncaughtException or unhandledRejection occurs ([e5323c9](https://github.com/nrkno/tv-automation-atem-connection/commit/e5323c9))
* rename setAudioChannelXX methods to setAudioMixerInputXXX to harmonize with other audio commands ([77fe521](https://github.com/nrkno/tv-automation-atem-connection/commit/77fe521))
* set enum values explicitly ([bd50491](https://github.com/nrkno/tv-automation-atem-connection/commit/bd50491))
* upgrade dependencies to pass audit ([98d16a8](https://github.com/nrkno/tv-automation-atem-connection/commit/98d16a8))
* upgrade typescript to latest ([b68afbf](https://github.com/nrkno/tv-automation-atem-connection/commit/b68afbf))
* **AudioMixerMasterCommand:** set flag properly ([78fa0b5](https://github.com/nrkno/tv-automation-atem-connection/commit/78fa0b5))


### Features

* add support for MasterChannel ([722d744](https://github.com/nrkno/tv-automation-atem-connection/commit/722d744))



# [0.9.0](https://github.com/nrkno/tv-automation-atem-connection/compare/0.8.2...0.9.0) (2019-02-21)


### Bug Fixes

* AudioMixerInputCommand ([69608c7](https://github.com/nrkno/tv-automation-atem-connection/commit/69608c7))


### Features

* audio channels ([1b3bd32](https://github.com/nrkno/tv-automation-atem-connection/commit/1b3bd32))
* top level methods for audio channels ([6c390d3](https://github.com/nrkno/tv-automation-atem-connection/commit/6c390d3))



<a name="0.8.2"></a>
## [0.8.2](https://github.com/nrkno/tv-automation-atem-connection/compare/0.8.1...0.8.2) (2019-01-19)


### Bug Fixes

* one object per multiviewer in the state ([5f53526](https://github.com/nrkno/tv-automation-atem-connection/commit/5f53526))



<a name="0.8.1"></a>
## [0.8.1](https://github.com/nrkno/tv-automation-atem-connection/compare/0.8.0...0.8.1) (2018-11-26)


### Bug Fixes

* **perf:** remove nanotimer for intervals as it uses 100% cpu ([d7bc543](https://github.com/nrkno/tv-automation-atem-connection/commit/d7bc543))
* let node bind to a random port for our udp socket ([b7be165](https://github.com/nrkno/tv-automation-atem-connection/commit/b7be165))
* timers are cleaned when calling disconnect, even when not connected ([d3040d1](https://github.com/nrkno/tv-automation-atem-connection/commit/d3040d1))



<a name="0.8.0"></a>
# [0.8.0](https://github.com/nrkno/tv-automation-atem-connection/compare/0.7.0...0.8.0) (2018-11-02)


### Bug Fixes

* improve reliability of resending ([ccaa051](https://github.com/nrkno/tv-automation-atem-connection/commit/ccaa051))


### Features

* Rename downstreamKeyId to downstreamKeyerId to make them all consistent and be consistent with upstream keyer ([58f61ee](https://github.com/nrkno/tv-automation-atem-connection/commit/58f61ee))
* use a nanotimer in socket child for ack'ing ([84482ca](https://github.com/nrkno/tv-automation-atem-connection/commit/84482ca))



<a name="0.7.0"></a>
# [0.7.0](https://github.com/nrkno/tv-automation-atem-connection/compare/0.6.1...0.7.0) (2018-10-24)


### Bug Fixes

* **atemSocket:** fix _maxPacketID being off-by-one ([ee70083](https://github.com/nrkno/tv-automation-atem-connection/commit/ee70083))
* **atemSocket:** fix _maxPacketID being off-by-one ([4efecdd](https://github.com/nrkno/tv-automation-atem-connection/commit/4efecdd))
* file description cmd does not always need name / descr. ([8837dd0](https://github.com/nrkno/tv-automation-atem-connection/commit/8837dd0))
* **Data Command:** size property ([df16109](https://github.com/nrkno/tv-automation-atem-connection/commit/df16109))
* **Data Command:** size property ([35a846d](https://github.com/nrkno/tv-automation-atem-connection/commit/35a846d))
* ack'ing after init ([8197ab5](https://github.com/nrkno/tv-automation-atem-connection/commit/8197ab5))
* behaviour around packetId wrapping ([d8e4626](https://github.com/nrkno/tv-automation-atem-connection/commit/d8e4626))
* child process timeout ([8196d8e](https://github.com/nrkno/tv-automation-atem-connection/commit/8196d8e))
* colour space ([bb19e9e](https://github.com/nrkno/tv-automation-atem-connection/commit/bb19e9e))
* colour space ([8f295d3](https://github.com/nrkno/tv-automation-atem-connection/commit/8f295d3))
* convencience method for setting clip in MP ([a8feeef](https://github.com/nrkno/tv-automation-atem-connection/commit/a8feeef))
* convencience method for setting clip in MP ([b5455a3](https://github.com/nrkno/tv-automation-atem-connection/commit/b5455a3))
* do not ack discontinuous packet sequences ([bfb679f](https://github.com/nrkno/tv-automation-atem-connection/commit/bfb679f))
* file description cmd does not always need name / descr. ([683d83b](https://github.com/nrkno/tv-automation-atem-connection/commit/683d83b))
* frame description file name ([bc1224b](https://github.com/nrkno/tv-automation-atem-connection/commit/bc1224b))
* frame description file name ([1c7290d](https://github.com/nrkno/tv-automation-atem-connection/commit/1c7290d))
* **Data Transfer:** stop condition, send description only once ([bca847f](https://github.com/nrkno/tv-automation-atem-connection/commit/bca847f))
* lint ([666cff5](https://github.com/nrkno/tv-automation-atem-connection/commit/666cff5))
* lint ([61ba6f8](https://github.com/nrkno/tv-automation-atem-connection/commit/61ba6f8))
* Media Player Source Command ([3103ca6](https://github.com/nrkno/tv-automation-atem-connection/commit/3103ca6))
* Media Player Source Command ([5c1ebb1](https://github.com/nrkno/tv-automation-atem-connection/commit/5c1ebb1))
* messages without correct transferid will be ignored ([301c545](https://github.com/nrkno/tv-automation-atem-connection/commit/301c545))
* more aggressive resend strategy ([8900ded](https://github.com/nrkno/tv-automation-atem-connection/commit/8900ded))
* optimize inFlightTimeout ([32b3c44](https://github.com/nrkno/tv-automation-atem-connection/commit/32b3c44))
* reject timed out commands ([fd3d045](https://github.com/nrkno/tv-automation-atem-connection/commit/fd3d045))
* revert new packetId on resend ([2fe6368](https://github.com/nrkno/tv-automation-atem-connection/commit/2fe6368))
* socket process exits when parent process does ([#30](https://github.com/nrkno/tv-automation-atem-connection/issues/30)) ([4754cc7](https://github.com/nrkno/tv-automation-atem-connection/commit/4754cc7))
* **Data Transfer:** remove old commands after failing ([09ee4b4](https://github.com/nrkno/tv-automation-atem-connection/commit/09ee4b4))
* **Data Transfer:** remove old commands after failing ([dfa1cfc](https://github.com/nrkno/tv-automation-atem-connection/commit/dfa1cfc))
* **Data Transfer:** stop condition, send description only once ([627c9f2](https://github.com/nrkno/tv-automation-atem-connection/commit/627c9f2))
* **dataTransfer:** ignore unexpected DataTransferCompleteCommands ([1f97a4a](https://github.com/nrkno/tv-automation-atem-connection/commit/1f97a4a))
* **dataTransfer:** ignore unexpected DataTransferCompleteCommands ([517253d](https://github.com/nrkno/tv-automation-atem-connection/commit/517253d))
* **dataTrasnfer:** fail when a DataTransferErrorCommand is received ([ba17501](https://github.com/nrkno/tv-automation-atem-connection/commit/ba17501))
* **dataTrasnfer:** fail when a DataTransferErrorCommand is received ([441ef68](https://github.com/nrkno/tv-automation-atem-connection/commit/441ef68))
* **Media:** fix Util imports ([55a1f28](https://github.com/nrkno/tv-automation-atem-connection/commit/55a1f28))
* **Media:** fix Util imports ([7f0577a](https://github.com/nrkno/tv-automation-atem-connection/commit/7f0577a))


### Features

* clear media pool ([310308b](https://github.com/nrkno/tv-automation-atem-connection/commit/310308b))
* clear media pool ([9f64e58](https://github.com/nrkno/tv-automation-atem-connection/commit/9f64e58))
* **DataTransfer:** add errorCode property to DataTransferErrorCommand ([7e302e1](https://github.com/nrkno/tv-automation-atem-connection/commit/7e302e1))
* Data Commands ([d1bf2ba](https://github.com/nrkno/tv-automation-atem-connection/commit/d1bf2ba))
* Data Commands ([2e14efb](https://github.com/nrkno/tv-automation-atem-connection/commit/2e14efb))
* **DataTransfer:** add errorCode property to DataTransferErrorCommand ([d8b2d5f](https://github.com/nrkno/tv-automation-atem-connection/commit/d8b2d5f))
* **Media:** Media Pool Description Commands ([fbae9b1](https://github.com/nrkno/tv-automation-atem-connection/commit/fbae9b1))
* **Media:** Media Pool Description Commands ([5050fe8](https://github.com/nrkno/tv-automation-atem-connection/commit/5050fe8))
* **Media Pool:** clear / set commands ([40fce0c](https://github.com/nrkno/tv-automation-atem-connection/commit/40fce0c))
* **Media Pool:** clear / set commands ([a2ecc82](https://github.com/nrkno/tv-automation-atem-connection/commit/a2ecc82))
* Media Upload API, File Transfer Manager ([c240477](https://github.com/nrkno/tv-automation-atem-connection/commit/c240477))
* Media Upload API, File Transfer Manager ([c5e4684](https://github.com/nrkno/tv-automation-atem-connection/commit/c5e4684))
* TransferManager ([a9336c9](https://github.com/nrkno/tv-automation-atem-connection/commit/a9336c9))
* TransferManager ([a2588a7](https://github.com/nrkno/tv-automation-atem-connection/commit/a2588a7))
* TransferManager ([e3e69a1](https://github.com/nrkno/tv-automation-atem-connection/commit/e3e69a1))
* TransferManager ([ee3ed26](https://github.com/nrkno/tv-automation-atem-connection/commit/ee3ed26))
* Video Mode command ([b9980e3](https://github.com/nrkno/tv-automation-atem-connection/commit/b9980e3))
* Video Mode command ([c87c0b8](https://github.com/nrkno/tv-automation-atem-connection/commit/c87c0b8))


### Performance Improvements

* **dataTransfer:** increase transfer throughput ([db8e4c4](https://github.com/nrkno/tv-automation-atem-connection/commit/db8e4c4))
* **dataTransfer:** increase transfer throughput ([d96b38d](https://github.com/nrkno/tv-automation-atem-connection/commit/d96b38d))



<a name="0.6.1"></a>
## [0.6.1](https://github.com/nrkno/tv-automation-atem-connection/compare/0.6.0...0.6.1) (2018-10-23)


### Bug Fixes

* behaviour around packetId wrapping ([9c8e3a8](https://github.com/nrkno/tv-automation-atem-connection/commit/9c8e3a8))
* do not ack discontinuous packet sequences ([91f36bf](https://github.com/nrkno/tv-automation-atem-connection/commit/91f36bf))
* do not ack discontinuous packet sequences ([1bde19d](https://github.com/nrkno/tv-automation-atem-connection/commit/1bde19d))
* more aggressive resend strategy ([d1fd66c](https://github.com/nrkno/tv-automation-atem-connection/commit/d1fd66c))
* optimize inFlightTimeout ([0812a63](https://github.com/nrkno/tv-automation-atem-connection/commit/0812a63))
* reject timed out commands ([a8cfa68](https://github.com/nrkno/tv-automation-atem-connection/commit/a8cfa68))



<a name="0.6.0"></a>
# [0.6.0](https://github.com/nrkno/tv-automation-atem-connection/compare/0.5.2...0.6.0) (2018-10-16)


### Bug Fixes

* **DVE upstream key:** borderHueWidth is 3600 ([4b2db48](https://github.com/nrkno/tv-automation-atem-connection/commit/4b2db48))


### Features

* parse psu status ([16f677f](https://github.com/nrkno/tv-automation-atem-connection/commit/16f677f))
* Use device ModelId to determine how many psu to track in state ([f0631d1](https://github.com/nrkno/tv-automation-atem-connection/commit/f0631d1))



<a name="0.5.2"></a>
## [0.5.2](https://github.com/nrkno/tv-automation-atem-connection/compare/0.5.1...0.5.2) (2018-09-23)


### Bug Fixes

* **socket:** prevent connection from dying when the main thread is blocked ([#19](https://github.com/nrkno/tv-automation-atem-connection/issues/19)) ([6814713](https://github.com/nrkno/tv-automation-atem-connection/commit/6814713))
* dsk state not being updated ([bcdea2b](https://github.com/nrkno/tv-automation-atem-connection/commit/bcdea2b))



<a name="0.5.1"></a>
## [0.5.1](https://github.com/nrkno/tv-automation-atem-connection/compare/0.5.0...0.5.1) (2018-09-04)



<a name="0.5.0"></a>
# [0.5.0](https://github.com/nrkno/tv-automation-atem-connection/compare/0.4.0...0.5.0) (2018-08-17)


### Bug Fixes

* macro state is not an array, it's one "macro player" ([76c8b7b](https://github.com/nrkno/tv-automation-atem-connection/commit/76c8b7b))
* typo in super source boxes capabilities command ([f123694](https://github.com/nrkno/tv-automation-atem-connection/commit/f123694))


### Features

* implement MacroRunStatus command (MRPr) ([98f5650](https://github.com/nrkno/tv-automation-atem-connection/commit/98f5650))



<a name="0.4.0"></a>
# [0.4.0](https://github.com/nrkno/tv-automation-atem-connection/compare/0.3.2...0.4.0) (2018-08-15)


### Bug Fixes

* symmetry is a percentage ([3dd03a9](https://github.com/nrkno/tv-automation-atem-connection/commit/3dd03a9))


### Features

* Super Source Properties ([031df18](https://github.com/nrkno/tv-automation-atem-connection/commit/031df18))



<a name="0.3.2"></a>
## [0.3.2](https://github.com/nrkno/tv-automation-atem-connection/compare/0.3.1...0.3.2) (2018-08-14)


### Bug Fixes

* symmetry is a percentage ([93e751d](https://github.com/nrkno/tv-automation-atem-connection/commit/93e751d))



<a name="0.3.1"></a>
## [0.3.1](https://github.com/nrkno/tv-automation-atem-connection/compare/0.3.0...0.3.1) (2018-08-09)


### Bug Fixes

* reported transition position may be 10 000 ([c301808](https://github.com/nrkno/tv-automation-atem-connection/commit/c301808))



<a name="0.3.0"></a>
# [0.3.0](https://github.com/nrkno/tv-automation-atem-connection/compare/0.2.3...0.3.0) (2018-08-07)


### Bug Fixes

* emit error upon failing value sanity check ([e11b3fa](https://github.com/nrkno/tv-automation-atem-connection/commit/e11b3fa))
* export util ([004ef9a](https://github.com/nrkno/tv-automation-atem-connection/commit/004ef9a))
* flyKeyFrameId is 1 or 2 ([b0ced83](https://github.com/nrkno/tv-automation-atem-connection/commit/b0ced83))
* use an object when appriopriate ([7d13bd3](https://github.com/nrkno/tv-automation-atem-connection/commit/7d13bd3))
* **atemSocket:** fix _maxPacketID being off-by-one ([28c1400](https://github.com/nrkno/tv-automation-atem-connection/commit/28c1400))


### Features

* value sanity checks ([9d2b021](https://github.com/nrkno/tv-automation-atem-connection/commit/9d2b021))



<a name="0.2.3"></a>
## [0.2.3](https://github.com/nrkno/tv-automation-atem-connection/compare/0.2.2...0.2.3) (2018-08-07)


### Bug Fixes

* **atemSocket:** fix _maxPacketID being off-by-one ([e116c35](https://github.com/nrkno/tv-automation-atem-connection/commit/e116c35))



<a name="0.2.2"></a>
## [0.2.2](https://github.com/nrkno/tv-automation-atem-connection/compare/0.2.1...0.2.2) (2018-08-06)



<a name="0.2.1"></a>
## [0.2.1](https://github.com/nrkno/tv-automation-atem-connection/compare/0.2.0...0.2.1) (2018-07-01)


### Bug Fixes

* typo ([41a29ff](https://github.com/nrkno/tv-automation-atem-connection/commit/41a29ff))



<a name="0.2.0"></a>
# [0.2.0](https://github.com/nrkno/tv-automation-atem-connection/compare/0.1.7...0.2.0) (2018-07-01)


### Features

* disconnect method ([54dfa15](https://github.com/nrkno/tv-automation-atem-connection/commit/54dfa15))



<a name="0.1.7"></a>
## [0.1.7](https://github.com/nrkno/tv-automation-atem-connection/compare/0.1.6...0.1.7) (2018-06-21)


### Bug Fixes

* deserialization of preview,program and aux source ([3c0027e](https://github.com/nrkno/tv-automation-atem-connection/commit/3c0027e))



<a name="0.1.6"></a>
## [0.1.6](https://github.com/nrkno/tv-automation-atem-connection/compare/0.1.5...0.1.6) (2018-06-21)


### Bug Fixes

* supersource info commands ([2e13938](https://github.com/nrkno/tv-automation-atem-connection/commit/2e13938))



<a name="0.1.5"></a>
## [0.1.5](https://github.com/nrkno/tv-automation-atem-connection/compare/0.1.4...0.1.5) (2018-06-15)



<a name="0.1.4"></a>
## [0.1.4](https://github.com/nrkno/tv-automation-atem-connection/compare/0.1.3...0.1.4) (2018-06-15)


### Bug Fixes

* preview command sets the right property in the state ([103fabd](https://github.com/nrkno/tv-automation-atem-connection/commit/103fabd))



<a name="0.1.3"></a>
## [0.1.3](https://github.com/nrkno/tv-automation-atem-connection/compare/0.1.2...0.1.3) (2018-06-09)


### Bug Fixes

* AbstractCommand works with static MaskFlags ([360f266](https://github.com/nrkno/tv-automation-atem-connection/commit/360f266))



<a name="0.1.2"></a>
## [0.1.2](https://github.com/nrkno/tv-automation-atem-connection/compare/0.1.1...0.1.2) (2018-06-07)


### Bug Fixes

* export abstract command ([5c82037](https://github.com/nrkno/tv-automation-atem-connection/commit/5c82037))



<a name="0.1.1"></a>
## [0.1.1](https://github.com/nrkno/tv-automation-atem-connection/compare/0.1.0...0.1.1) (2018-06-07)


### Bug Fixes

* export Abstract Command ([88a12b6](https://github.com/nrkno/tv-automation-atem-connection/commit/88a12b6))
* MaskFlags are a static property ([ddafc4f](https://github.com/nrkno/tv-automation-atem-connection/commit/ddafc4f))



<a name="0.1.0"></a>
# 0.1.0 (2018-06-05)


### Bug Fixes

* **API:** make properties a public member of commands ([a3b69d3](https://github.com/nrkno/tv-automation-atem-connection/commit/a3b69d3))
* **Aux command:** set default bus to 1, add a mask in the raw command ([db4f0ba](https://github.com/nrkno/tv-automation-atem-connection/commit/db4f0ba))
* **DVE Upstream Keyer:** Correct word size ([9ba5635](https://github.com/nrkno/tv-automation-atem-connection/commit/9ba5635))
* add correct ssh fingerprint ([6019e6e](https://github.com/nrkno/tv-automation-atem-connection/commit/6019e6e))
* prevent garbage data from being added to productName ([5b3417a](https://github.com/nrkno/tv-automation-atem-connection/commit/5b3417a))
* rename back to atem-connection ([e1b3e63](https://github.com/nrkno/tv-automation-atem-connection/commit/e1b3e63))
* rename library and add contributer ([a57299e](https://github.com/nrkno/tv-automation-atem-connection/commit/a57299e))
* **DVE Upstream Keyer:** property name should equal flag name ([d684198](https://github.com/nrkno/tv-automation-atem-connection/commit/d684198))
* rename workflow for better readability ([7f1fbd9](https://github.com/nrkno/tv-automation-atem-connection/commit/7f1fbd9))
* safely get the downstream keyer ([25bf0f1](https://github.com/nrkno/tv-automation-atem-connection/commit/25bf0f1))
* **Socket:** local packetId should start at 1 ([2199e5c](https://github.com/nrkno/tv-automation-atem-connection/commit/2199e5c))
* set rawnames ([b68ad41](https://github.com/nrkno/tv-automation-atem-connection/commit/b68ad41))
* **InputPropertiesCommand:** include the inputId of each source in the state tree ([3fdabba](https://github.com/nrkno/tv-automation-atem-connection/commit/3fdabba))
* **Socket:** fix parsing of packet name and length ([dc25ea7](https://github.com/nrkno/tv-automation-atem-connection/commit/dc25ea7))
* **Utility functions:** remove unnecessary utility functions ([a7d0f78](https://github.com/nrkno/tv-automation-atem-connection/commit/a7d0f78))
* tests ([4d3576a](https://github.com/nrkno/tv-automation-atem-connection/commit/4d3576a))
* update config for new features ([4682a64](https://github.com/nrkno/tv-automation-atem-connection/commit/4682a64))
* update ignores ([d79b224](https://github.com/nrkno/tv-automation-atem-connection/commit/d79b224))
* update scripts-info ([8508f98](https://github.com/nrkno/tv-automation-atem-connection/commit/8508f98))
* use ASCII encoding for strings, instead of utf8 ([8978d49](https://github.com/nrkno/tv-automation-atem-connection/commit/8978d49))


### Features

* **Inputs:** implement InPr (read) and CInL (write) commands ([17e1688](https://github.com/nrkno/tv-automation-atem-connection/commit/17e1688))
* **Media Player Status:** get and set play/loop/atBeginning and frames ([664af37](https://github.com/nrkno/tv-automation-atem-connection/commit/664af37))
* **SuperSource:** implement SSBP (read) and CSBP (write) commands ([b21e56e](https://github.com/nrkno/tv-automation-atem-connection/commit/b21e56e))
* Downstream Keyer Settings ([b90cf3a](https://github.com/nrkno/tv-automation-atem-connection/commit/b90cf3a))
* export commands and substates ([9be9e61](https://github.com/nrkno/tv-automation-atem-connection/commit/9be9e61))
* Initialization Complete Command ([ba55c89](https://github.com/nrkno/tv-automation-atem-connection/commit/ba55c89))
* top level connection status events ([1f606ed](https://github.com/nrkno/tv-automation-atem-connection/commit/1f606ed))
* Topology Command ([0380432](https://github.com/nrkno/tv-automation-atem-connection/commit/0380432))
* use external logging function, limit packet logs to debug mode ([b92f175](https://github.com/nrkno/tv-automation-atem-connection/commit/b92f175))



<a name="0.5.1"></a>
## [0.5.1](https://bitbucket.org/superflytv/node-boilerplate/compare/0.5.0...0.5.1) (2018-02-25)


### Bug Fixes

* remove auto-deploy to npm ([5515b71](https://bitbucket.org/superflytv/node-boilerplate/commits/5515b71))



<a name="0.5.0"></a>
# [0.5.0](https://bitbucket.org/superflytv/node-boilerplate/compare/0.4.6...0.5.0) (2018-02-25)


### Bug Fixes

* adding release for one final publication ([7f11b78](https://bitbucket.org/superflytv/node-boilerplate/commits/7f11b78))
* Cleaning up repository ([ba7cafc](https://bitbucket.org/superflytv/node-boilerplate/commits/ba7cafc))
* cleanup ([562fb0c](https://bitbucket.org/superflytv/node-boilerplate/commits/562fb0c))


### Features

* Disable automatic rollout to NPM for now ([18dd79f](https://bitbucket.org/superflytv/node-boilerplate/commits/18dd79f))



<a name="0.4.6"></a>
## [0.4.6](https://github.com/superflytv/node-boilerplate/compare/0.4.5...0.4.6) (2018-02-25)


### Bug Fixes

* add tslib ([2447570](https://github.com/superflytv/node-boilerplate/commit/2447570))



<a name="0.4.5"></a>
## [0.4.5](https://github.com/superflytv/node-boilerplate/compare/0.4.4...0.4.5) (2018-02-25)


### Bug Fixes

* send coverage before release ([b53c1aa](https://github.com/superflytv/node-boilerplate/commit/b53c1aa))



<a name="0.4.4"></a>
## [0.4.4](https://github.com/superflytv/node-boilerplate/compare/0.4.3...0.4.4) (2018-02-25)


### Bug Fixes

* auto rollout to npm on master branch ([ef5d68f](https://github.com/superflytv/node-boilerplate/commit/ef5d68f))



<a name="0.4.3"></a>
## [0.4.3](https://github.com/superflytv/node-boilerplate/compare/0.4.2...0.4.3) (2018-02-25)


### Bug Fixes

* only allow spec.ts files ([027b4f2](https://github.com/superflytv/node-boilerplate/commit/027b4f2))
* use npm for npm deploy, for now ([0bb1911](https://github.com/superflytv/node-boilerplate/commit/0bb1911))



<a name="0.4.2"></a>
## [0.4.2](https://github.com/superflytv/node-boilerplate/compare/0.4.1...0.4.2) (2018-02-25)


### Bug Fixes

* add ssh key to npm step for ssh ([8ca98f5](https://github.com/superflytv/node-boilerplate/commit/8ca98f5))



<a name="0.4.1"></a>
## [0.4.1](https://github.com/superflytv/node-boilerplate/compare/v0.4.0...v0.4.1) (2018-02-25)


### Bug Fixes

* Set skip ci in auto-commit message and rename tag releases ([1338bd0](https://github.com/superflytv/node-boilerplate/commit/1338bd0))



<a name="0.4.0"></a>
# 0.4.0 (2018-02-25)


### Bug Fixes

* add ssh key to release build ([00a03c2](https://github.com/superflytv/node-boilerplate/commit/00a03c2))
* Auto-release on circleci ([64ba8d7](https://github.com/superflytv/node-boilerplate/commit/64ba8d7))
* Bugfix and add not strict for bitbucket ([0d5f60b](https://github.com/superflytv/node-boilerplate/commit/0d5f60b))
* casing issue ([71a7295](https://github.com/superflytv/node-boilerplate/commit/71a7295))
* changing to .org ([746f766](https://github.com/superflytv/node-boilerplate/commit/746f766))
* changing to .org ([b0837bc](https://github.com/superflytv/node-boilerplate/commit/b0837bc))
* Explicit coverage repoting ([1aac204](https://github.com/superflytv/node-boilerplate/commit/1aac204))
* indent style on yaml files ([3b3582b](https://github.com/superflytv/node-boilerplate/commit/3b3582b))
* indentation and paths wrong ([cad01af](https://github.com/superflytv/node-boilerplate/commit/cad01af))
* rearange commands ([c7ad4c1](https://github.com/superflytv/node-boilerplate/commit/c7ad4c1))
* Reordering workflow ([c912127](https://github.com/superflytv/node-boilerplate/commit/c912127))
* set correct ssh fingerprint ([616fc49](https://github.com/superflytv/node-boilerplate/commit/616fc49))
* Set git push command ([b825993](https://github.com/superflytv/node-boilerplate/commit/b825993))
* Set orgname ([9eb70e3](https://github.com/superflytv/node-boilerplate/commit/9eb70e3))
* setting git config ([a61c929](https://github.com/superflytv/node-boilerplate/commit/a61c929))
* Temporarily remove gh-pages publish ([c1cd735](https://github.com/superflytv/node-boilerplate/commit/c1cd735))
* use knownhost in stead of ssh config ([e432a10](https://github.com/superflytv/node-boilerplate/commit/e432a10))
* use knownhost in stead of ssh config ([3f37f75](https://github.com/superflytv/node-boilerplate/commit/3f37f75))


### Features

* full npm release cycle ([955863a](https://github.com/superflytv/node-boilerplate/commit/955863a))
* Initial boiler plate ([fbd16db](https://github.com/superflytv/node-boilerplate/commit/fbd16db))
* rename package for npm release ([53ac25c](https://github.com/superflytv/node-boilerplate/commit/53ac25c))



<a name="0.3.0"></a>
# [0.3.0](https://github.com/superflytv/node-boilerplate/compare/v0.2.2...v0.3.0) (2018-02-25)


### Bug Fixes

* Auto-release on circleci ([64ba8d7](https://github.com/superflytv/node-boilerplate/commit/64ba8d7))
* Explicit coverage repoting ([1aac204](https://github.com/superflytv/node-boilerplate/commit/1aac204))
* indent style on yaml files ([3b3582b](https://github.com/superflytv/node-boilerplate/commit/3b3582b))


### Features

* full npm release cycle ([955863a](https://github.com/superflytv/node-boilerplate/commit/955863a))



<a name="0.2.2"></a>
## [0.2.2](https://github.com/superflytv/node-boilerplate/compare/v0.2.1...v0.2.2) (2018-02-24)



<a name="0.2.1"></a>
## [0.2.1](https://github.com/superflytv/node-boilerplate/compare/v0.2.0...v0.2.1) (2018-02-24)


### Bug Fixes

* Set orgname ([9eb70e3](https://github.com/superflytv/node-boilerplate/commit/9eb70e3))



<a name="0.2.0"></a>
# [0.2.0](https://github.com/superflytv/node-boilerplate/compare/v0.1.0...v0.2.0) (2018-02-24)


### Features

* rename package for npm release ([53ac25c](https://github.com/superflytv/node-boilerplate/commit/53ac25c))



<a name="0.1.0"></a>
# 0.1.0 (2018-02-24)


### Bug Fixes

* casing issue ([71a7295](https://github.com/superflytv/node-boilerplate/commit/71a7295))


### Features

* Initial boiler plate ([fbd16db](https://github.com/superflytv/node-boilerplate/commit/fbd16db))
