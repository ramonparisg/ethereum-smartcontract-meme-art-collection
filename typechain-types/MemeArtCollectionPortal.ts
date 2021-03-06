/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export type MemeStruct = { imgUrl: string; title: string; description: string };

export type MemeStructOutput = [string, string, string] & {
  imgUrl: string;
  title: string;
  description: string;
};

export type PostStruct = {
  meme: MemeStruct;
  author: string;
  timestamp: BigNumberish;
};

export type PostStructOutput = [MemeStructOutput, string, BigNumber] & {
  meme: MemeStructOutput;
  author: string;
  timestamp: BigNumber;
};

export interface MemeArtCollectionPortalInterface extends utils.Interface {
  functions: {
    "getPosts()": FunctionFragment;
    "publishPost((string,string,string))": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "getPosts", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "publishPost",
    values: [MemeStruct]
  ): string;

  decodeFunctionResult(functionFragment: "getPosts", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "publishPost",
    data: BytesLike
  ): Result;

  events: {
    "NewPost(tuple,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "NewPost"): EventFragment;
}

export type NewPostEvent = TypedEvent<
  [MemeStructOutput, string, BigNumber],
  { meme: MemeStructOutput; from: string; timestamp: BigNumber }
>;

export type NewPostEventFilter = TypedEventFilter<NewPostEvent>;

export interface MemeArtCollectionPortal extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: MemeArtCollectionPortalInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    getPosts(overrides?: CallOverrides): Promise<[PostStructOutput[]]>;

    publishPost(
      meme: MemeStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  getPosts(overrides?: CallOverrides): Promise<PostStructOutput[]>;

  publishPost(
    meme: MemeStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    getPosts(overrides?: CallOverrides): Promise<PostStructOutput[]>;

    publishPost(meme: MemeStruct, overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    "NewPost(tuple,address,uint256)"(
      meme?: null,
      from?: string | null,
      timestamp?: null
    ): NewPostEventFilter;
    NewPost(
      meme?: null,
      from?: string | null,
      timestamp?: null
    ): NewPostEventFilter;
  };

  estimateGas: {
    getPosts(overrides?: CallOverrides): Promise<BigNumber>;

    publishPost(
      meme: MemeStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getPosts(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    publishPost(
      meme: MemeStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
