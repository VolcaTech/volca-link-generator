const ABI = [
    {
	"constant": false,
	"inputs": [],
	"name": "stop",
	"outputs": [],
	"payable": false,
	"stateMutability": "nonpayable",
	"type": "function"
    },
    {
	"constant": true,
	"inputs": [],
	"name": "LINKDROP_VERIFICATION_ADDRESS",
	"outputs": [
	    {
		"name": "",
		"type": "address"
	    }
	],
	"payable": false,
	"stateMutability": "view",
	"type": "function"
    },
    {
	"constant": false,
	"inputs": [],
	"name": "unpause",
	"outputs": [],
	"payable": false,
	"stateMutability": "nonpayable",
	"type": "function"
    },
    {
	"constant": false,
	"inputs": [
	    {
		"name": "_recipient",
		"type": "address"
	    },
	    {
		"name": "_tokenId",
		"type": "uint256"
	    },
	    {
		"name": "_transitAddress",
		"type": "address"
	    },
	    {
		"name": "_keyV",
		"type": "uint8"
	    },
	    {
		"name": "_keyR",
		"type": "bytes32"
	    },
	    {
		"name": "_keyS",
		"type": "bytes32"
	    },
	    {
		"name": "_recipientV",
		"type": "uint8"
	    },
	    {
		"name": "_recipientR",
		"type": "bytes32"
	    },
	    {
		"name": "_recipientS",
		"type": "bytes32"
	    }
	],
	"name": "withdraw",
	"outputs": [
	    {
		"name": "success",
		"type": "bool"
	    }
	],
	"payable": false,
	"stateMutability": "nonpayable",
	"type": "function"
    },
    {
	"constant": true,
	"inputs": [
	    {
		"name": "_transitAddress",
		"type": "address"
	    },
	    {
		"name": "_addressSigned",
		"type": "address"
	    },
	    {
		"name": "_tokenId",
		"type": "uint256"
	    },
	    {
		"name": "_v",
		"type": "uint8"
	    },
	    {
		"name": "_r",
		"type": "bytes32"
	    },
	    {
		"name": "_s",
		"type": "bytes32"
	    }
	],
	"name": "verifyLinkPrivateKey",
	"outputs": [
	    {
		"name": "success",
		"type": "bool"
	    }
	],
	"payable": false,
	"stateMutability": "pure",
	"type": "function"
    },
    {
	"constant": true,
	"inputs": [],
	"name": "paused",
	"outputs": [
	    {
		"name": "",
		"type": "bool"
	    }
	],
	"payable": false,
	"stateMutability": "view",
	"type": "function"
    },
    {
	"constant": true,
	"inputs": [],
	"name": "stopped",
	"outputs": [
	    {
		"name": "",
		"type": "bool"
	    }
	],
	"payable": false,
	"stateMutability": "view",
	"type": "function"
    },
    {
	"constant": false,
	"inputs": [],
	"name": "pause",
	"outputs": [],
	"payable": false,
	"stateMutability": "nonpayable",
	"type": "function"
    },
    {
	"constant": true,
	"inputs": [],
	"name": "owner",
	"outputs": [
	    {
		"name": "",
		"type": "address"
	    }
	],
	"payable": false,
	"stateMutability": "view",
	"type": "function"
    },
    {
	"constant": true,
	"inputs": [
	    {
		"name": "_recipient",
		"type": "address"
	    },
	    {
		"name": "_tokenId",
		"type": "uint256"
	    },
	    {
		"name": "_transitAddress",
		"type": "address"
	    },
	    {
		"name": "_keyV",
		"type": "uint8"
	    },
	    {
		"name": "_keyR",
		"type": "bytes32"
	    },
	    {
		"name": "_keyS",
		"type": "bytes32"
	    },
	    {
		"name": "_recipientV",
		"type": "uint8"
	    },
	    {
		"name": "_recipientR",
		"type": "bytes32"
	    },
	    {
		"name": "_recipientS",
		"type": "bytes32"
	    }
	],
	"name": "checkWithdrawal",
	"outputs": [
	    {
		"name": "success",
		"type": "bool"
	    }
	],
	"payable": false,
	"stateMutability": "view",
	"type": "function"
    },
    {
	"constant": true,
	"inputs": [
	    {
		"name": "_transitAddress",
		"type": "address"
	    }
	],
	"name": "isLinkClaimed",
	"outputs": [
	    {
		"name": "claimed",
		"type": "bool"
	    }
	],
	"payable": false,
	"stateMutability": "view",
	"type": "function"
    },
    {
	"constant": true,
	"inputs": [],
	"name": "NFT_ADDRESS",
	"outputs": [
	    {
		"name": "",
		"type": "address"
	    }
	],
	"payable": false,
	"stateMutability": "view",
	"type": "function"
    },
    {
	"constant": true,
	"inputs": [],
	"name": "LINKDROPPER",
	"outputs": [
	    {
		"name": "",
		"type": "address"
	    }
	],
	"payable": false,
	"stateMutability": "view",
	"type": "function"
    },
    {
	"constant": true,
	"inputs": [
	    {
		"name": "_transitAddress",
		"type": "address"
	    },
	    {
		"name": "_addressSigned",
		"type": "address"
	    },
	    {
		"name": "_v",
		"type": "uint8"
	    },
	    {
		"name": "_r",
		"type": "bytes32"
	    },
	    {
		"name": "_s",
		"type": "bytes32"
	    }
	],
	"name": "verifyReceiverAddress",
	"outputs": [
	    {
		"name": "success",
		"type": "bool"
	    }
	],
	"payable": false,
	"stateMutability": "pure",
	"type": "function"
    },
    {
	"inputs": [
	    {
		"name": "_NFTAddress",
		"type": "address"
	    },
	    {
		"name": "_linkdropVerificationAddress",
		"type": "address"
	    }
	],
	"payable": false,
	"stateMutability": "nonpayable",
	"type": "constructor"
    },
    {
	"anonymous": false,
	"inputs": [
	    {
		"indexed": true,
		"name": "transitAddress",
		"type": "address"
	    },
	    {
		"indexed": true,
		"name": "tokenId",
		"type": "uint256"
	    },
	    {
		"indexed": false,
		"name": "receiver",
		"type": "address"
	    },
	    {
		"indexed": false,
		"name": "timestamp",
		"type": "uint256"
	    }
	],
	"name": "LogWithdraw",
	"type": "event"
    },
    {
	"anonymous": false,
	"inputs": [],
	"name": "Stop",
	"type": "event"
    },
    {
	"anonymous": false,
	"inputs": [],
	"name": "Pause",
	"type": "event"
    },
    {
	"anonymous": false,
	"inputs": [],
	"name": "Unpause",
	"type": "event"
    }
]

const BYTECODE = "608060405260008060146101000a81548160ff02191690831515021790555060008060156101000a81548160ff02191690831515021790555034801561004457600080fd5b506040516040806111a48339810180604052810190808051906020019092919080519060200190929190505050336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555033600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555081600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505061101f806101856000396000f3006080604052600436106100db576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806307da68f5146100e057806321f1f766146100f75780633f4ba83a1461014e5780634cd6bd321461016557806351bd3eac1461023c5780635c975abb146102ea57806375f12b21146103195780638456cb59146103485780638da5cb5b1461035f578063a054d3ef146103b6578063b2e357b41461048d578063b32c5c45146104e8578063b43114f81461053f578063cd26ac8314610596578063fef429e91461063a575b600080fd5b3480156100ec57600080fd5b506100f56106bd565b005b34801561010357600080fd5b5061010c61077d565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561015a57600080fd5b506101636107a3565b005b34801561017157600080fd5b50610222600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803560ff16906020019092919080356000191690602001909291908035600019169060200190929190803560ff16906020019092919080356000191690602001909291908035600019169060200190929190505050610861565b604051808215151515815260200191505060405180910390f35b34801561024857600080fd5b506102d0600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803560ff16906020019092919080356000191690602001909291908035600019169060200190929190505050610b01565b604051808215151515815260200191505060405180910390f35b3480156102f657600080fd5b506102ff610c49565b604051808215151515815260200191505060405180910390f35b34801561032557600080fd5b5061032e610c5c565b604051808215151515815260200191505060405180910390f35b34801561035457600080fd5b5061035d610c6f565b005b34801561036b57600080fd5b50610374610d2f565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156103c257600080fd5b50610473600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803560ff16906020019092919080356000191690602001909291908035600019169060200190929190803560ff16906020019092919080356000191690602001909291908035600019169060200190929190505050610d54565b604051808215151515815260200191505060405180910390f35b34801561049957600080fd5b506104ce600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610dd4565b604051808215151515815260200191505060405180910390f35b3480156104f457600080fd5b506104fd610dff565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561054b57600080fd5b50610554610e25565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156105a257600080fd5b50610620600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803560ff16906020019092919080356000191690602001909291908035600019169060200190929190505050610e4b565b604051808215151515815260200191505060405180910390f35b34801561064657600080fd5b5061067b600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610f8a565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561071857600080fd5b600060159054906101000a900460ff1615151561073457600080fd5b6001600060156101000a81548160ff0219169083151502179055507fbedf0f4abfe86d4ffad593d9607fe70e83ea706033d44d24b3b6283cf3fc4f6b60405160405180910390a1565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156107fe57600080fd5b600060149054906101000a900460ff16151561081957600080fd5b60008060146101000a81548160ff0219169083151502179055507f7805862f689e2f13df9f062ff482ad3ad112aca9e0847911ed832e158c525b3360405160405180910390a1565b600080600060149054906101000a900460ff1615151561088057600080fd5b600060159054906101000a900460ff1615151561089c57600080fd5b6108ad8b8b8b8b8b8b8b8b8b610d54565b15156108b857600080fd5b8a600460008b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508073ffffffffffffffffffffffffffffffffffffffff166323b872dd600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168d8d6040518463ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019350505050600060405180830381600087803b158015610a5457600080fd5b505af1158015610a68573d6000803e3d6000fd5b50505050898973ffffffffffffffffffffffffffffffffffffffff167f11cff9441d1b1c0949ccc50697d3d7eef62761919f4ab329d7ee90f3e314783e8d42604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060405180910390a360019150509998505050505050505050565b6000806000878760405180807f19457468657265756d205369676e6564204d6573736167653a0a333200000000815250601c018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c010000000000000000000000000281526014018281526020019250505060405180910390209150600182878787604051600081526020016040526040518085600019166000191681526020018460ff1660ff1681526020018360001916600019168152602001826000191660001916815260200194505050505060206040516020810390808403906000865af1158015610c00573d6000803e3d6000fd5b5050506020604051035190508873ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614925050509695505050505050565b600060149054906101000a900460ff1681565b600060159054906101000a900460ff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610cca57600080fd5b600060149054906101000a900460ff16151515610ce657600080fd5b6001600060146101000a81548160ff0219169083151502179055507f6985a02210a168e66602d3235cb6db0e70f92b3ba4d376a33c0f3d9434bff62560405160405180910390a1565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000801515610d6289610dd4565b1515141515610d7057600080fd5b610da0600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16898b8a8a8a610b01565b1515610dab57600080fd5b610db8888b868686610e4b565b1515610dc357600080fd5b600190509998505050505050505050565b600080610de083610f8a565b73ffffffffffffffffffffffffffffffffffffffff1614159050919050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008060008660405180807f19457468657265756d205369676e6564204d6573736167653a0a333200000000815250601c018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c0100000000000000000000000002815260140191505060405180910390209150600182878787604051600081526020016040526040518085600019166000191681526020018460ff1660ff1681526020018360001916600019168152602001826000191660001916815260200194505050505060206040516020810390808403906000865af1158015610f42573d6000803e3d6000fd5b5050506020604051035190508773ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16149250505095945050505050565b6000600460008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690509190505600a165627a7a7230582063a0fe0a53b17e2508d56d3fab7e3f0e19ea858edace139e7f159a61581aff850029";

module.exports = {
    BYTECODE,
    ABI   
}
