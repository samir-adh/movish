import { Review } from "./review";
import crypto from "crypto";

const defaultCoverUrl = "";

export class Movie {
  private _id: string;
  private _title: string;
  private _director: string;
  private _year: number;
  private _reviews: Review[];
  private _coverUrl?: string;

  public constructor(t: string, d: string, y: number, c?: string) {
    const hashEntry: string = t + d + y.toString();
    const id: string = crypto
      .createHash("sha256")
      .update(hashEntry)
      .digest("hex");
    this._id = id;
    this._title = t;
    this._year = y;
    this._reviews = [];
    this._director = d;
    this._coverUrl = c;
  }

  public addReview(review: Review): Movie {
    const updatedMovie: Movie = {
      ...this,
      _reviews: this._reviews.concat([review]),
    };
    return updatedMovie;
  }

  public get id(): string {
    return this._id;
  }

  public get title(): string {
    return this._title;
  }

  public get year(): number {
    return this._year;
  }

  public get reviews(): Review[] {
    return this._reviews;
  }

  public get director(): string {
    return this._director;
  }

  public get coverUrl(): string {
    return this._coverUrl ? this._coverUrl : defaultCoverUrl;
  }
}
