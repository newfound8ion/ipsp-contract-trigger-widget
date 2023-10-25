export const contractABI: any[] = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_poC",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "activationFunctionId",
        type: "uint256",
      },
    ],
    name: "ActivationFunctionApproved",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "activationFunctionId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "developer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "context",
        type: "string",
      },
    ],
    name: "ActivationFunctionRegistered",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "addr",
        type: "address",
      },
    ],
    name: "DebugAddress",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "activationFunctionId",
        type: "uint256",
      },
    ],
    name: "activate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "activationFunctions",
    outputs: [
      {
        internalType: "address",
        name: "issuer",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
      {
        internalType: "enum NewcoinEncoder.WattType",
        name: "wattType",
        type: "uint8",
      },
      {
        internalType: "uint256",
        name: "multiplier",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "contextId",
        type: "bytes32",
      },
      {
        internalType: "string",
        name: "context",
        type: "string",
      },
      {
        internalType: "string",
        name: "description",
        type: "string",
      },
      {
        internalType: "address",
        name: "addrss",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "weightInWatt",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "isAsync",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "activationFunctionId",
        type: "uint256",
      },
    ],
    name: "approveActivationFunction",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "activationFunctionId",
        type: "uint256",
      },
    ],
    name: "canMint",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getApprovedActivationFunctions",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "issuer",
            type: "address",
          },
          {
            internalType: "bool",
            name: "approved",
            type: "bool",
          },
          {
            internalType: "enum NewcoinEncoder.WattType",
            name: "wattType",
            type: "uint8",
          },
          {
            internalType: "uint256",
            name: "multiplier",
            type: "uint256",
          },
          {
            internalType: "bytes32",
            name: "contextId",
            type: "bytes32",
          },
          {
            internalType: "string",
            name: "context",
            type: "string",
          },
          {
            internalType: "string",
            name: "description",
            type: "string",
          },
          {
            internalType: "address",
            name: "addrss",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "weightInWatt",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "isAsync",
            type: "bool",
          },
        ],
        internalType: "struct NewcoinEncoder.ActivationFunction[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "conditionMet",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "activationFunctionId",
        type: "uint256",
      },
    ],
    name: "oracleResponse",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "poC",
    outputs: [
      {
        internalType: "contract EnergyMinterMock",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "enum NewcoinEncoder.WattType",
        name: "_wattType",
        type: "uint8",
      },
      {
        internalType: "uint256",
        name: "_multiplier",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "_contextId",
        type: "bytes32",
      },
      {
        internalType: "string",
        name: "_context",
        type: "string",
      },
      {
        internalType: "string",
        name: "_description",
        type: "string",
      },
      {
        internalType: "address",
        name: "_addrss",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_weightInWatt",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "_isAsync",
        type: "bool",
      },
    ],
    name: "registerActivationFunction",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];
